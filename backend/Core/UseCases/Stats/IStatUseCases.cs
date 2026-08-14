using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Stats;

public interface IStatsUseCases
{
    Task<IEnumerable<Stat>> GetMailStatsByPriorityAsync();
    Task<IEnumerable<Stat>> GetMailStatsByStatusAsync();
    Task<IEnumerable<Stat>> GetMailStatsByChildrenAsync();
    
}
