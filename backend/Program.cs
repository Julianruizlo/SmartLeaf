using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Text;
using data.API; // Asegúrate de que la ruta sea correcta

var builder = WebApplication.CreateBuilder(args);

// Leer configuración del archivo appsettings.json
var config = builder.Configuration;
var jwtKey = config["Jwt:Key"] ?? throw new InvalidOperationException("JWT key missing in configuration");

// 1. Configurar autenticación JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false; // poner true en producción
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtKey))
    };
});

// 2. Registrar servicios necesarios
builder.Services.AddHttpClient<PlantIdService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});
builder.Services.AddControllers();

// 3. Registrar tu servicio de autenticación (AuthService)
builder.Services.AddScoped<SmartLeaf.Services.AuthService>();

var app = builder.Build();

// 4. Configurar middlewares
app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");

app.UseAuthentication(); // Agregar esto ANTES de Authorization
app.UseAuthorization();

app.MapControllers();

app.Run();