namespace SmartLeaf.Backend.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Especie { get; set; }
        public DateTime FechaRegistro { get; set; }
        // Agregá más propiedades si querés (luz, humedad, etc.)
    }
}

