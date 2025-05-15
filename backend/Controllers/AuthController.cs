using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using SmartLeaf.Domain; // Asegurate de tener esta ruta para RegisterRequest y LoginRequest
using SmartLeaf.Services;

namespace SmartLeaf.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly AuthService _authService;

        public AuthController(UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        AuthService authService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                return Unauthorized(new { message = "Credenciales inválidas" });

            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
            if (!result.Succeeded)
                return Unauthorized(new { message = "Credenciales inválidas" });

            var token = await _authService.GenerateToken(user);
            return Ok(new { token });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest model)
        {
            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                FullName = model.FullName,
                //Username = model.Username
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
                return BadRequest(result.Errors);

            return Ok("Usuario registrado correctamente");
        }
    }
}

