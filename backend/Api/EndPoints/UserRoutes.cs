using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SnowDispatcher.Api.Models;
using SnowDispatcher.Core.UseCases.Account;

namespace SnowDispatcher.Api.EndPoints;

public static class UserRoutes
{
    public static WebApplication MapUserRoutes(this WebApplication app)
    {
        app.MapPost("/api/login", async (IAccountUseCases useCases, IConfiguration configuration, [FromBody] LoginRequest request) =>
        {
            if (request is null)
            {
                return Results.BadRequest(new { error = "Identifiants requis" });
            }

            var user = await useCases.LoginAsync(request.Username, request.Password);
            if (user is null)
            {
                return Results.Unauthorized();
            }

            return Results.Ok(new
            {
                token = CreateJwtToken(user, configuration),
                role = user.Role,
                userId = user.UserId,
                username = user.Username
            });
        })
        .WithTags("Users")
        .WithName("Login");

        return app;
    }

    private static string CreateJwtToken(SnowDispatcher.Core.Models.AuthenticatedUser user, IConfiguration configuration)
    {
        var key = configuration["Jwt:Key"];
        if (string.IsNullOrWhiteSpace(key))
        {
            throw new InvalidOperationException("Jwt:Key is missing from configuration.");
        }

        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Name, user.Username),
            new(ClaimTypes.NameIdentifier, user.UserId.ToString()),
            new(ClaimTypes.Role, user.Role)
        };

        var credentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
            SecurityAlgorithms.HmacSha256);

        var expirationMinutes = double.TryParse(configuration["Jwt:ExpireTimeInMinutes"], out var minutes)
            ? minutes
            : 60;

        var token = new JwtSecurityToken(
            issuer: configuration["Jwt:Issuer"],
            audience: configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(expirationMinutes),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
