using SmartLeaf.Domain;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Npgsql;
using Microsoft.AspNetCore.Identity;

namespace SmartLeaf.Services
{
    public class AuthService
    {
        private readonly IConfiguration _config;
        private readonly string _connectionString;

        public AuthService(IConfiguration config)
        {
            _config = config;
            _connectionString = _config.GetConnectionString("Supabase");
        }

        public async Task<string?> AuthenticateAsync(string email, string password)
        {
            using var conn = new NpgsqlConnection(_connectionString);
            await conn.OpenAsync();

            // Buscar usuario por email
            AspNetUser user = null;
            using (var cmd = new NpgsqlCommand("SELECT \"Id\", \"Email\", \"PasswordHash\", \"UserName\" FROM smartleafdb.aspnetusers WHERE \"Email\" = @e", conn))
            {
                cmd.Parameters.AddWithValue("e", email);
                using var reader = await cmd.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                {
                    user = new AspNetUser
                    {
                        Id = reader.GetString(0),
                        Email = reader.GetString(1),
                        PasswordHash = reader.GetString(2),
                        UserName = reader.GetString(3)
                    };
                }
            }

            if (user == null)
                return null;

            // Verificar hash de contraseña
            var passwordHasher = new PasswordHasher<AspNetUser>();
            var result = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            if (result == PasswordVerificationResult.Failed)
                return null;

            // Obtener el rol del usuario
            string role = "User";
            using (var cmd = new NpgsqlCommand(
                @"SELECT r.""Name"" FROM smartleafdb.aspnetuserroles ur
                  JOIN smartleafdb.aspnetroles r ON ur.""RoleId"" = r.""Id""
                  WHERE ur.""UserId"" = @uid LIMIT 1", conn))
            {
                cmd.Parameters.AddWithValue("uid", user.Id);
                using var reader = await cmd.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                    role = reader.GetString(0);
            }

            // Generar el token JWT
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(ClaimTypes.Role, role)
                }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task<(bool Success, string Error)> RegisterAsync(RegisterRequest request)
        {
            using var conn = new NpgsqlConnection(_connectionString);
            await conn.OpenAsync();

            // Verifica si el email ya existe
            using (var checkCmd = new NpgsqlCommand("SELECT COUNT(*) FROM smartleafdb.aspnetusers WHERE \"Email\" = @e", conn))
            {
                checkCmd.Parameters.AddWithValue("e", request.Email);
                var exists = (long)await checkCmd.ExecuteScalarAsync();
                if (exists > 0)
                    return (false, "El email ya está registrado");
            }

            // Hashea la contraseña
            var user = new AspNetUser { UserName = request.UserName, Email = request.Email };
            var passwordHasher = new PasswordHasher<AspNetUser>();
            var passwordHash = passwordHasher.HashPassword(user, request.Password);

            // Crea el usuario
            var userId = Guid.NewGuid().ToString();
            using (var insertCmd = new NpgsqlCommand(
                @"INSERT INTO smartleafdb.aspnetusers 
                (""Id"", ""FullName"", ""UserName"", ""NormalizedUserName"", ""Email"", ""NormalizedEmail"", ""EmailConfirmed"", ""PasswordHash"", ""SecurityStamp"", ""ConcurrencyStamp"", ""PhoneNumberConfirmed"", ""TwoFactorEnabled"", ""LockoutEnabled"", ""AccessFailedCount"") 
                VALUES (@id, @fn, @un, @nun, @em, @nem, true, @ph, @ss, @cs, false, false, false, 0)", conn))
            {
                insertCmd.Parameters.AddWithValue("id", userId);
                insertCmd.Parameters.AddWithValue("fn", request.FullName ?? "");
                insertCmd.Parameters.AddWithValue("un", request.UserName);
                insertCmd.Parameters.AddWithValue("nun", request.UserName.ToUpper());
                insertCmd.Parameters.AddWithValue("em", request.Email);
                insertCmd.Parameters.AddWithValue("nem", request.Email.ToUpper());
                insertCmd.Parameters.AddWithValue("ph", passwordHash);
                insertCmd.Parameters.AddWithValue("ss", Guid.NewGuid().ToString());
                insertCmd.Parameters.AddWithValue("cs", Guid.NewGuid().ToString());
                await insertCmd.ExecuteNonQueryAsync();
            }

            // Asigna el rol por defecto (User)
            string roleId = null;
            using (var roleCmd = new NpgsqlCommand("SELECT \"Id\" FROM smartleafdb.aspnetroles WHERE \"Name\" = 'User' LIMIT 1", conn))
            using (var reader = await roleCmd.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                    roleId = reader.GetString(0);
            }
            if (roleId != null)
            {
                using (var urCmd = new NpgsqlCommand(
                    @"INSERT INTO smartleafdb.aspnetuserroles (""UserId"", ""RoleId"") VALUES (@uid, @rid)", conn))
                {
                    urCmd.Parameters.AddWithValue("uid", userId);
                    urCmd.Parameters.AddWithValue("rid", roleId);
                    await urCmd.ExecuteNonQueryAsync();
                }
            }

            return (true, "");
        }
    }
}