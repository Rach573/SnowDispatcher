using SnowDispatcher.Core.IGateways;

namespace SnowDispatcher.Core.UseCases.Tache;

public class TacheUseCases : ITacheUseCases
{
    private readonly ITacheGateway _tacheGateway;

    public TacheUseCases(ITacheGateway tacheGateway)
    {
        _tacheGateway = tacheGateway;
    }

    public Task<Models.Tache> CreateTacheAsync(Models.Tache tache)
    {
        return _tacheGateway.CreateAsync(tache);
    }

    public Task<IEnumerable<Models.Tache>> GetAllTasksAsync()
    {
        return _tacheGateway.GetAllAsync();
    }

    public Task AssignTaskToAgentAsync(int taskId, int? agentId)
    {
        return _tacheGateway.AssignTaskToAgentAsync(taskId, agentId);
    }

    public Task DeleteTaskAsync(int id)
    {
        return _tacheGateway.DeleteAsync(id);
    }
}
