using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Mappers;
using SnowDispatcher.Infrastructure.Repositories;

namespace SnowDispatcher.Infrastructure.Gateways;

public class TacheGateway : ITacheGateway
{
    private readonly ITacheRepository _repository;

    public TacheGateway(ITacheRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Tache>> GetAllAsync()
    {
        var taches = await _repository.GetAllAsync();
        return taches.Select(TacheMapper.ToCore);
    }

    public async Task<Tache> CreateAsync(Tache tache)
    {
        var created = await _repository.CreateAsync(TacheMapper.ToDb(tache));
        return TacheMapper.ToCore(created);
    }

    public Task AssignMailToAgentAsync(int mailId, int? agentUserId)
    {
        return _repository.AssignMailToAgentAsync(mailId, agentUserId);
    }

    public Task AssignTaskToAgentAsync(int taskId, int? agentId)
    {
        return _repository.AssignTaskToAgentAsync(taskId, agentId);
    }

    public Task DeleteAsync(int id)
    {
        return _repository.DeleteAsync(id);
    }

    public async Task<IEnumerable<AdminMailAssignment>> GetAdminMailAssignmentsAsync()
    {
        var assignments = await _repository.GetAdminMailAssignmentsAsync();
        return assignments.Select(AdminMapper.ToCore);
    }

    public async Task<IEnumerable<AdminMailAssignment>> GetMailsForAgentAsync(int agentUserId)
    {
        var mails = await _repository.GetMailsForAgentAsync(agentUserId);
        return mails.Select(AdminMapper.ToCore);
    }

    public Task MarkTaskAsTreatedAsync(int taskId, int agentUserId)
    {
        return _repository.MarkTaskAsTreatedAsync(taskId, agentUserId);
    }
}
