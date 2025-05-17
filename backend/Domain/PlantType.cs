using System.ComponentModel.DataAnnotations;

namespace SmartLeaf.Domain
{
    public class PlantType
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string CommonName { get; set; }

        [MaxLength(150)]
        public string ScientificName { get; set; }

        public string Description { get; set; }

        [MaxLength(255)]
        public string ImageUrl { get; set; }

        [MaxLength(50)]
        public string LightRequirement { get; set; }

        [MaxLength(50)]
        public string WaterFrequency { get; set; }

        [MaxLength(50)]
        public string TemperatureRange { get; set; }
    }
}
