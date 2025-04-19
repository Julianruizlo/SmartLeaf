using System.ComponentModel.DataAnnotations;

namespace SmartLeaf.Backend.DTOs
{
    public class CreatePlantDto
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Species { get; set; } = string.Empty;
    }
}

// para crear una planta