using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using data.API; // Asegúrate de que la ruta sea correcta

var builder = WebApplication.CreateBuilder(args);

// Configurar servicios
builder.Services.AddHttpClient<PlantIdService>(); // Registra el servicio PlantIdService
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:5173") // Cambia esto por la URL de tu frontend
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});
builder.Services.AddControllers();

var app = builder.Build();

// Configurar middleware
app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");
app.UseAuthorization();
app.MapControllers();

app.Run();