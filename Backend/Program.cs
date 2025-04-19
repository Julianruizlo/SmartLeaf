using Microsoft.EntityFrameworkCore;
using SmartLeaf.Backend.Data;
using SmartLeaf.Backend.Services;
using SmartLeaf.Backend.Repositories;


var builder = WebApplication.CreateBuilder(args);

// Acá registrás los servicios
builder.Services.AddDbContext<SmartLeafDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<PlantService>();
builder.Services.AddScoped<IPlantRepository, PlantRepository>();

builder.Services.AddControllers().AddNewtonsoftJson(); // Para evitar problemas con JSON

var app = builder.Build();

app.UseRouting();
app.UseAuthorization();
app.MapControllers();
app.Run();

