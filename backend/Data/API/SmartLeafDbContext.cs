using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SmartLeaf.Domain;


namespace SmartLeaf.Data
{
    public class SmartLeafDbContext : IdentityDbContext<ApplicationUser>
    {
        public SmartLeafDbContext(DbContextOptions<SmartLeafDbContext> options)
            : base(options) { }

        public DbSet<Plant> Plants { get; set; }
        public DbSet<PlantType> PlantTypes { get; set; }

    }
}


