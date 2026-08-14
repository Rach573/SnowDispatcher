using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.IGateways;

public interface ITacheGateway
{
    Task<IEnumerable<Tache>> GetAllAsync();
    Task<Tache> CreateAsync(Tache tache);
    Task AssignTaskToAgentAsync(int taskId, int? agentId);
    Task DeleteAsync(int id);
    Task AssignMailToAgentAsync(int mailId, int? agentUserId);
    Task<IEnumerable<AdminMailAssignment>> GetAdminMailAssignmentsAsync();
    Task<IEnumerable<AdminMailAssignment>> GetMailsForAgentAsync(int agentUserId);
    Task MarkTaskAsTreatedAsync(int taskId, int agentUserId);
}
