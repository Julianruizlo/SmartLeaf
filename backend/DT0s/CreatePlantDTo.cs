namespace Controllers.DTOs

{
    public class CreatePlantDto
    {
        public int PlantTypeId { get; set; }
        public string CustomName { get; set; }
        public DateTime PlantedDate { get; set; }
        public string Region { get; set; }
        public string Status { get; set; }
    }
}
