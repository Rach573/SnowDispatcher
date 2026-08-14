using SnowDispatcher.Core.UseCases.Mail;

namespace SnowDispatcher.Api.EndPoints;

public static class MailRoutes
{
    public static WebApplication MapMailRoutes(this WebApplication app)
    {
        var group = app.MapGroup("/api/mails")
            .RequireAuthorization("AuthenticatedUser")
            .WithTags("Mails");

        group.MapGet("", async (IMailUseCases useCases) =>
        {
            var mails = await useCases.GetAllMailsAsync();
            return Results.Ok(mails);
        })
        .WithName("GetMails");

        group.MapGet("/{id:int}", async (IMailUseCases useCases, int id) =>
        {
            var mail = await useCases.GetMailByIdAsync(id);
            return mail is null ? Results.NotFound() : Results.Ok(mail);
        })
        .WithName("GetMailById");

        return app;
    }
}
