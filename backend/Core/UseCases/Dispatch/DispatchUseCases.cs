using SnowDispatcher.Core.Abstractions;
using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Dispatch;

public class DispatchUseCases : IDispatchUseCases
{
    private readonly IMailGateway _mailGateway;
    private readonly ITacheGateway _tacheGateway;
    private readonly IDateTimeProvider _dateTimeProvider;

    public DispatchUseCases(
        IMailGateway mailGateway,
        ITacheGateway tacheGateway,
        IDateTimeProvider dateTimeProvider)
    {
        _mailGateway = mailGateway;
        _tacheGateway = tacheGateway;
        _dateTimeProvider = dateTimeProvider;
    }

    public string CalculerPriorite(string statutHierarchique)
    {
        if (statutHierarchique == "Leader")
        {
            return "Alerte Rouge";
        }

        if (statutHierarchique == "N+1")
        {
            return "Urgent";
        }

        return "Normale";
    }

    public async Task<SnowDispatcher.Core.Models.Tache> CreerTacheDepuisMailAsync(int mailId)
    {
        var mail = await _mailGateway.GetByIdAsync(mailId);
        if (mail is null)
        {
            throw new InvalidOperationException($"Mail introuvable: {mailId}");
        }

        var tache = new SnowDispatcher.Core.Models.Tache
        {
            MailId = mail.Id,
            AgentId = null,
            Priority = "Normale",
            Status = "Nouvelle",
            CreatedAt = _dateTimeProvider.Now
        };

        return await _tacheGateway.CreateAsync(tache);
    }
}
