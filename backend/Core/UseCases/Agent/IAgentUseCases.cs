using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Agent;

public interface IAgentUseCases
{
    Task<IEnumerable<AdminMailAssignment>> GetAssignedMailsAsync(int userId);
    Task MarkTaskAsTreatedAsync(int taskId, int userId);
}
