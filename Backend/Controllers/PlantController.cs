using Microsoft.AspNetCore.Mvc;
using SmartLeaf.Backend.Models;
using SmartLeaf.Backend.Services;

namespace SmartLeaf.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlantController : ControllerBase
    {
        private readonly PlantService _plantService;

        public PlantController(PlantService plantService)
        {
            _plantService = plantService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Plant>>> GetAll()
        {
            var plants = await _plantService.GetAllAsync();
            return Ok(plants);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Plant>> GetById(int id)
        {
            var plant = await _plantService.GetByIdAsync(id);
            if (plant == null) return NotFound();
            return Ok(plant);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Plant plant)
        {
            await _plantService.AddAsync(plant);
            return CreatedAtAction(nameof(GetById), new { id = plant.Id }, plant);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Plant plant)
        {
            if (id != plant.Id) return BadRequest();
            await _plantService.UpdateAsync(plant);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _plantService.DeleteAsync(id);
            return NoContent();
        }
    }
}
