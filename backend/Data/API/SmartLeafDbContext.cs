using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SmartLeaf.Domain;


namespace SmartLeaf.Data
{
    public class SmartLeafDbContext : IdentityDbContext<ApplicationUser>
    {
        public SmartLeafDbContext(DbContextOptions<SmartLeafDbContext> options)
            : base(options) { }

        // Agregá otras tablas si las tenés, pero NO agregues DbSet<ApplicationUser> acá.
        // Identity ya lo maneja internamente.
    }
}


