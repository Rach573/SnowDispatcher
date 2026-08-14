using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.IGateways;

public interface IUserGateway
{
    Task<AuthenticatedUser?> AuthenticateAsync(string username, string passwordHash, string legacyPlainPassword);
    Task<IEnumerable<AdminAgent>> GetAdminAgentsAsync();
    Task UpdateAgentPasswordHashAsync(int userId, string passwordHash);
    Task DeleteAgentAsync(int userId);
    Task<int> AddAgentAsync(string username, int? staffId, string passwordHash);
}
