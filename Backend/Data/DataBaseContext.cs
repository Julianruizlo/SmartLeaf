using Microsoft.EntityFrameworkCore;
using SmartLeaf.Backend.Models;

namespace SmartLeaf.Backend.Data
{
    public class SmartLeafDbContext : DbContext
    {
        public SmartLeafDbContext(DbContextOptions<SmartLeafDbContext> options)
            : base(options) {}

        public DbSet<Plant> Plants { get; set; }
    }
}