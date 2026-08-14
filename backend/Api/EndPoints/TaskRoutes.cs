using SnowDispatcher.Core.UseCases.Dispatch;
using SnowDispatcher.Core.UseCases.Tache;

namespace SnowDispatcher.Api.EndPoints;

public static class TaskRoutes
{
    public static WebApplication MapTaskRoutes(this WebApplication app)
    {
        var group = app.MapGroup("/api/tasks")
            .RequireAuthorization("AuthenticatedUser")
            .WithTags("Tasks");

        group.MapGet("", async (ITacheUseCases useCases) =>
        {
            var tasks = await useCases.GetAllTasksAsync();
            return Results.Ok(tasks);
        });

        group.MapPost("/create", async (IDispatchUseCases useCases, int mailId) =>
        {
            var task = await useCases.CreerTacheDepuisMailAsync(mailId);
            return Results.Ok(task);
        });

        group.MapPut("/{id:int}/assign", async (ITacheUseCases useCases, int id, int? agentId) =>
        {
            await useCases.AssignTaskToAgentAsync(id, agentId);
            return Results.Ok(new { message = "Tâche réassignée" });
        });

        group.MapDelete("/{id:int}", async (ITacheUseCases useCases, int id) =>
        {
            await useCases.DeleteTaskAsync(id);
            return Results.Ok(new { message = "Tâche supprimée" });
        });

        return app;
    }
}
