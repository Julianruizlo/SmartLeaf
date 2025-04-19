using System.Collections.Generic;
using System.Threading.Tasks;
using SmartLeaf.Backend.Models;

namespace SmartLeaf.Backend.Repositories
{
    public interface IPlantRepository
    {
        Task<List<Plant>> GetAllAsync();
        Task<Plant> GetByIdAsync(int id);
        Task AddAsync(Plant plant);
        Task UpdateAsync(Plant plant);
        Task DeleteAsync(int id);
    }
}
