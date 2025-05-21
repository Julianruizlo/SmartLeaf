using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartLeaf.Domain
{
    public enum PlantStatus
    {
        Regar,
        Cosechar,
        RecienPlantada
    }

    public class Plant
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }  // FK a ApplicationUser

        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

        [Required]
        public int PlantTypeId { get; set; }  // FK a PlantType

        [ForeignKey("PlantTypeId")]
        public PlantType PlantType { get; set; }

        [Required]
        [MaxLength(100)]
        public string CustomName { get; set; }

        [Required]
        public DateTime PlantedDate { get; set; }

        [MaxLength(100)]
        public string Region { get; set; }

        [Required]
        public PlantStatus Status { get; set; }
    }
}
