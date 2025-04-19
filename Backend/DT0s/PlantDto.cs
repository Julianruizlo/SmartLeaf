using System.ComponentModel.DataAnnotations;

namespace SmartLeaf.Backend.DTOs
{
    public class UpdatePlantDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Species { get; set; } = string.Empty;
    }
}

// para actualizar una planta