using SnowDispatcher.Core.UseCases.Dispatch;

namespace SnowDispatcher.Api.EndPoints;

public static class DispatchRoutes
{
    public static WebApplication MapDispatchRoutes(this WebApplication app)
    {
        var group = app.MapGroup("/api/dispatches")
            .RequireAuthorization("AuthenticatedUser")
            .WithTags("Dispatches");

        group.MapPost("/from-mail/{mailId:int}", async (IDispatchUseCases useCases, int mailId) =>
        {
            var tache = await useCases.CreerTacheDepuisMailAsync(mailId);
            return Results.Ok(tache);
        })
        .WithName("CreateDispatchFromMail");

        return app;
    }
}
