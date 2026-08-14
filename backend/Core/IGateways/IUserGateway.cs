using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.IGateways;

public interface IUserGateway
{
    Task<AuthenticatedUser?> AuthenticateAsync(string username, string passwordHash, string legacyPlainPassword);
    Task<IEnumerable<AgentDashboardInfo>> GetAgentDashboardInfoAsync();
    Task UpdateAgentPasswordHashAsync(int userId, string passwordHash);
    Task DeleteAgentDashboardInfoAsync(int userId);
    Task<int> AddAgentDashboardInfoAsync(string username, int? staffId, string passwordHash, int nombreEnfants);
}
