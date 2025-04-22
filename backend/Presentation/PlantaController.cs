using backend.Data.API;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

// Controlador API

namespace backend.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlantaController : ControllerBase
    {
        private readonly PlantIdService _plantIdService;

        public PlantaController(PlantIdService plantIdService)
        {
            _plantIdService = plantIdService;
        }

        [HttpPost("identificar")]
        public async Task<IActionResult> Identificar([FromBody] string base64Image)
        {
            if (string.IsNullOrWhiteSpace(base64Image))
            {
                return BadRequest("La imagen en base64 es obligatoria.");
            }

            try
            {
                var resultado = await _plantIdService.IdentifyPlantAsync(base64Image);
                return Ok(resultado);
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, $"Error al conectarse con Plant.ID: {ex.Message}");
            }
        }
    }
}
