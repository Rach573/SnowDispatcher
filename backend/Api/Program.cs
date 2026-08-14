using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using SnowDispatcher.Api.EndPoints;
using SnowDispatcher.Core.Extensions;
using SnowDispatcher.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddCoreServices();
builder.Services.AddInfrastructureServices(builder.Configuration);

var jwtKey = builder.Configuration["Jwt:Key"];
if (string.IsNullOrWhiteSpace(jwtKey))
{
    throw new InvalidOperationException("Jwt:Key is missing from configuration.");
}

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("admin"));
    options.AddPolicy("AgentOnly", policy => policy.RequireRole("agent"));
    options.AddPolicy("AuthenticatedUser", policy => policy.RequireRole("admin", "agent"));
});

var app = builder.Build();

app.MapGet("/", () => Results.Ok(new
{
    application = "SnowDispatcher API",
    status = "running",
    databaseCheck = "/debug/db"
}));

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.MapUserRoutes();
app.MapStaffRoutes();
app.MapMailRoutes();
app.MapTaskRoutes();
app.MapDispatchRoutes();
app.MapAgentRoutes();
app.MapAdminRoutes();

app.Run();
