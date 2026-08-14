using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public interface IUserRepository
{
    Task<UserAuthDbModel?> AuthenticateAsync(string username, string passwordHash, string legacyPlainPassword);
    Task<IEnumerable<AgentDashboardInfoDbModel>> GetAgentDashboardInfoAsync();
    Task UpdateAgentPasswordHashAsync(int userId, string passwordHash);
    Task DeleteAgentDashboardInfoAsync(int userId);
    Task<int> AddAgentDashboardInfoAsync(string username, int? staffId, string passwordHash, int nombreEnfants);
}
