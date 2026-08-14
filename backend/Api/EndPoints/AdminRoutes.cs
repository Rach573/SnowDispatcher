using Microsoft.AspNetCore.Mvc;
using SnowDispatcher.Api.Models;
using SnowDispatcher.Core.UseCases.Account;
using SnowDispatcher.Core.UseCases.Admin;
using SnowDispatcher.Core.UseCases.Assignment;
using SnowDispatcher.Core.UseCases.Stats;


namespace SnowDispatcher.Api.EndPoints;

public static class AdminRoutes
{
    public static WebApplication MapAdminRoutes(this WebApplication app)
    {
        var group = app.MapGroup("/api/admin")
            .RequireAuthorization("AdminOnly")
            .WithTags("Admin");

        group.MapGet("/agents", async (IAdminUseCases useCases) =>
        {
            var agents = await useCases.GetAgentsAsync();
            return Results.Ok(agents);
        });

        group.MapGet("/agents/{id:int}/mails", async (IAdminUseCases useCases, int id) =>
        {
            var mails = await useCases.GetMailsForAgentAsync(id);
            return Results.Ok(mails);
        });

        group.MapGet("/mail-assignments", async (IAdminUseCases useCases) =>
        {
            var assignments = await useCases.GetMailAssignmentsAsync();
            return Results.Ok(assignments);
        });

        group.MapPut("/mails/{mailId:int}/assign", async (IAssignMailUseCases useCases, int mailId, int? agentUserId) =>
        {
            await useCases.AssignMailToAgentAsync(mailId, agentUserId);
            return Results.Ok(new { message = "Mail attribué" });
        });

        group.MapPut("/agents/{id:int}/password", async (IAccountUseCases useCases, int id, [FromBody] UpdatePasswordRequest request) =>
        {
            if (request is null || string.IsNullOrWhiteSpace(request.Password))
            {
                return Results.BadRequest(new { error = "Le mot de passe est requis" });
            }

            await useCases.UpdateAgentPasswordAsync(id, request.Password);
            return Results.Ok(new { message = "Mot de passe mis à jour" });
        });

        group.MapPost("/agents", async (IAdminUseCases useCases, [FromBody] CreateAgentRequest request) =>
        {
            if (request is null || string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return Results.BadRequest(new { error = "Le nom d'utilisateur et le mot de passe sont requis" });
            }
        
            var passwordHash = Convert.ToHexString(System.Security.Cryptography.SHA256.HashData(System.Text.Encoding.UTF8.GetBytes(request.Password))).ToLowerInvariant();

            var id = await useCases.AddAgentAsync(request.Username.Trim(), request.StaffId, passwordHash, request.NombreEnfants);

            return Results.Created($"/api/admin/agents/{id}", new { id });
        });

        group.MapDelete("/agents/{id:int}", async (IAdminUseCases useCases, int id) =>
        {
            await useCases.DeleteAgentAsync(id);
            return Results.Ok(new { message = "Agent supprimé" });
        });

        group.MapGet("/stats/by-priority", async (IStatsUseCases useCases) =>
        {
            var stats = await useCases.GetMailStatsByPriorityAsync();
            return Results.Ok(stats);
        });
         
        group.MapGet("/stats/by-status", async (IStatsUseCases useCases) =>
        {
            var stats = await useCases.GetMailStatsByStatusAsync();
            return Results.Ok(stats);
        });

        group.MapGet("/stats/by-children", async (IStatsUseCases useCases) =>
        {
            var stats = await useCases.GetMailStatsByChildrenAsync();
            return Results.Ok(stats);
        });

        return app;
    }
}
