using SmartLeaf.Backend.Models;
using SmartLeaf.Backend.Repositories;
// Esta clase sirve para: Obtener, crear, editar y eliminar plantas.
namespace SmartLeaf.Backend.Services
{
    public class PlantService
    {
        private readonly IPlantRepository _plantRepository;

        public PlantService(IPlantRepository plantRepository)
        {
            _plantRepository = plantRepository;
        }

        public async Task<List<Plant>> GetAllAsync()
        {
            return await _plantRepository.GetAllAsync();
        }

        public async Task<Plant?> GetByIdAsync(int id)
        {
            return await _plantRepository.GetByIdAsync(id);
        }

        public async Task AddAsync(Plant plant)
        {
            await _plantRepository.AddAsync(plant);
        }

        public async Task UpdateAsync(Plant plant)
        {
            await _plantRepository.UpdateAsync(plant);
        }

        public async Task DeleteAsync(int id)
        {
            await _plantRepository.DeleteAsync(id);
        }
    }
}

