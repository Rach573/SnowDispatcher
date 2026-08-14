using Microsoft.AspNetCore.Mvc;
using SnowDispatcher.Api.Models;
using SnowDispatcher.Core.UseCases.Staff;

namespace SnowDispatcher.Api.EndPoints;

public static class StaffRoutes
{
    public static WebApplication MapStaffRoutes(this WebApplication app)
    {
        var group = app.MapGroup("/api/staff")
            .RequireAuthorization("AdminOnly")
            .WithTags("Staff");

        group.MapGet("", async (IStaffUseCases useCases) =>
        {
            
            var staff = await useCases.GetAllStaffAsync();
            return Results.Ok(staff);
        });

        group.MapPost("", async (IStaffUseCases useCases, [FromBody] CreateStaffRequest request) =>
        {
            var id = await useCases.AddStaffAsync(
                request.NomComplet,
                request.AdresseMail,
                request.StatutHierarchique,
                request.NombreEnfants);

            return Results.Ok(new { id });
        });

        group.MapDelete("/{id:int}", async (IStaffUseCases useCases, int id) =>
        {
            await useCases.DeleteStaffAsync(id);
            return Results.Ok(new { message = "Membre du staff supprime" });
        });

        return app;
    }
}
