using SnowDispatcher.Core.IGateways;

namespace SnowDispatcher.Core.UseCases.Assignment;

public class AssignMailUseCases : IAssignMailUseCases
{
    private readonly ITacheGateway _tacheGateway;

    public AssignMailUseCases(ITacheGateway tacheGateway)
    {
        _tacheGateway = tacheGateway;
    }

    public Task AssignMailToAgentAsync(int mailId, int? agentUserId)
    {
        if (mailId <= 0)
        {
            throw new ArgumentException("Le mail est invalide.", nameof(mailId));
        }

        return _tacheGateway.AssignMailToAgentAsync(mailId, agentUserId);
    }
}
