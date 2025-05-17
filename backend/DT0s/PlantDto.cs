namespace Controllers.DTOs
{
    public class PlantDto
    {
        public int Id { get; set; }
        public string CustomName { get; set; }
        public string Region { get; set; }
        public DateTime PlantedDate { get; set; }
        public string Status { get; set; }
        public string PlantTypeName { get; set; }
    }
}
