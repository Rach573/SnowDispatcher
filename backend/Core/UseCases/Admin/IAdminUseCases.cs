using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Admin;

public interface IAdminUseCases
{
    Task<IEnumerable<AdminAgent>> GetAgentsAsync();
    Task<IEnumerable<AdminMailAssignment>> GetMailAssignmentsAsync();
    Task<IEnumerable<AdminMailAssignment>> GetMailsForAgentAsync(int agentUserId);
    Task DeleteAgentAsync(int userId);
    Task<int> AddAgentAsync(string username, int? staffId, string passwordHash);
}
