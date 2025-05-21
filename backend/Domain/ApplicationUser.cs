using Microsoft.AspNetCore.Identity;

namespace SmartLeaf.Domain
{
    public class ApplicationUser : IdentityUser
    {
        // Si querés, podés agregar más campos personalizados
        public string? FullName { get; set; }
        //public string? Username { get; set; }
        public ICollection<Plant> Plants { get; set; } = new List<Plant>();
    }
}
