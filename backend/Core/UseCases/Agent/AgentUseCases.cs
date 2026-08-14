using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Agent;

public class AgentUseCases : IAgentUseCases
{
    private readonly ITacheGateway _tacheGateway;

    public AgentUseCases(ITacheGateway tacheGateway)
    {
        _tacheGateway = tacheGateway;
    }

    public Task<IEnumerable<AdminMailAssignment>> GetAssignedMailsAsync(int userId)
    {
        return _tacheGateway.GetMailsForAgentAsync(userId);
    }

    public Task MarkTaskAsTreatedAsync(int taskId, int userId)
    {
        return _tacheGateway.MarkTaskAsTreatedAsync(taskId, userId);
    }
}
