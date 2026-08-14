using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public interface ITacheRepository
{
    Task<IEnumerable<TacheDbModel>> GetAllAsync();
    Task<TacheDbModel> CreateAsync(TacheDbModel tache);
    Task AssignTaskToAgentAsync(int taskId, int? agentId);
    Task DeleteAsync(int id);
    Task AssignMailToAgentAsync(int mailId, int? agentUserId);
    Task<IEnumerable<AdminMailAssignmentDbModel>> GetAdminMailAssignmentsAsync();
    Task<IEnumerable<AdminMailAssignmentDbModel>> GetMailsForAgentAsync(int agentUserId);
    Task MarkTaskAsTreatedAsync(int taskId, int agentUserId);
}
