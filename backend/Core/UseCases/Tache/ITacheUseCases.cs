using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Tache;

public interface ITacheUseCases
{
    Task<IEnumerable<Models.Tache>> GetAllTasksAsync();
    Task<Models.Tache> CreateTacheAsync(Models.Tache tache);
    Task AssignTaskToAgentAsync(int taskId, int? agentId);
    Task DeleteTaskAsync(int id);
}
