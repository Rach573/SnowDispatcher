using SnowDispatcher.Core.UseCases.Agent;

namespace SnowDispatcher.Api.EndPoints;

public static class AgentRoutes
{
    public static WebApplication MapAgentRoutes(this WebApplication app)
    {
        var group = app.MapGroup("/api/agent")
            .RequireAuthorization("AgentOnly")
            .WithTags("Agent");

        group.MapGet("/mails", async (IAgentUseCases useCases, int userId) =>
        {
            var mails = await useCases.GetAssignedMailsAsync(userId);
            return Results.Ok(mails);
        });

        group.MapPut("/tasks/{taskId:int}/treated", async (IAgentUseCases useCases, int taskId, int userId) =>
        {
            await useCases.MarkTaskAsTreatedAsync(taskId, userId);
            return Results.Ok(new { message = "Mail traité" });
        });

        return app;
    }
}
