using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Collections.Generic;
using System.Linq;

using data.API;
using SmartLeaf.Data;
using SmartLeaf.Domain;
using Controllers.DTOs;

namespace SmartLeaf.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class PlantController : ControllerBase
    {
        private readonly PlantIdService _plantIdService;
        private readonly SmartLeafDbContext _context;

        public PlantController(PlantIdService plantIdService, SmartLeafDbContext context)
        {
            _plantIdService = plantIdService;
            _context = context;
        }

        // 1. Identificar planta desde imagen
        [HttpPost("identify")]
        public async Task<IActionResult> IdentifyPlant([FromBody] string base64Image)
        {
            if (string.IsNullOrEmpty(base64Image))
                return BadRequest("La imagen no puede estar vacía.");

            var result = await _plantIdService.IdentifyPlantAsync(base64Image);
            return Ok(result);
        }

        // 2. Buscar por nombre (esto es un mock)
        [HttpPost("search")]
        public async Task<IActionResult> SearchPlant([FromBody] string nombrePlanta)
        {
            if (string.IsNullOrEmpty(nombrePlanta))
                return BadRequest("El nombre de la planta no puede estar vacío.");

            return Ok(new { name = nombrePlanta });
        }

        // 3. Agregar planta al usuario
        [HttpPost("add")]
        public async Task<IActionResult> AddPlant([FromBody] CreatePlantDto dto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (!Enum.TryParse(dto.Status, out PlantStatus status))
                return BadRequest("Estado inválido.");

            var plant = new Plant
            {
                UserId = userId,
                PlantTypeId = dto.PlantTypeId,
                CustomName = dto.CustomName,
                Region = dto.Region,
                PlantedDate = dto.PlantedDate,
                Status = status
            };

            _context.Plants.Add(plant);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Planta agregada correctamente." });
        }

        // 4. Obtener plantas del usuario
        [HttpGet("myplants")]
        public async Task<ActionResult<IEnumerable<PlantDto>>> GetMyPlants()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var plants = await _context.Plants
                .Where(p => p.UserId == userId)
                .Include(p => p.PlantType)
                .Select(p => new PlantDto
                {
                    Id = p.Id,
                    CustomName = p.CustomName,
                    Region = p.Region,
                    PlantedDate = p.PlantedDate,
                    Status = p.Status.ToString(),
                    PlantTypeName = p.PlantType.CommonName
                })
                .ToListAsync();

            return Ok(plants);
        }

        // 5. Ver detalles de una planta
        [HttpGet("{id}")]
        public async Task<ActionResult<PlantDto>> GetPlantById(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var plant = await _context.Plants
                .Include(p => p.PlantType)
                .Where(p => p.Id == id && p.UserId == userId)
                .Select(p => new PlantDto
                {
                    Id = p.Id,
                    CustomName = p.CustomName,
                    Region = p.Region,
                    PlantedDate = p.PlantedDate,
                    Status = p.Status.ToString(),
                    PlantTypeName = p.PlantType.CommonName
                })
                .FirstOrDefaultAsync();

            if (plant == null)
                return NotFound();

            return Ok(plant);
        }
    }
}
