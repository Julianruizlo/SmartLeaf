using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartLeaf.Backend.Data;
using SmartLeaf.Backend.Models;

namespace SmartLeaf.Backend.Repositories
{
    public class PlantRepository : IPlantRepository
    {
        private readonly DataBaseContext _context;

        public PlantRepository(DataBaseContext context)
        {
            _context = context;
        }

        public async Task<List<Plant>> GetAllAsync()
        {
            return await _context.Plants.ToListAsync();
        }

        public async Task<Plant> GetByIdAsync(int id)
        {
            return await _context.Plants.FindAsync(id);
        }

        public async Task AddAsync(Plant plant)
        {
            _context.Plants.Add(plant);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Plant plant)
        {
            _context.Plants.Update(plant);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var plant = await _context.Plants.FindAsync(id);
            if (plant != null)
            {
                _context.Plants.Remove(plant);
                await _context.SaveChangesAsync();
            }
        }
    }
}
