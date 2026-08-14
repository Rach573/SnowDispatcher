using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public interface IUserRepository
{
    Task<UserAuthDbModel?> AuthenticateAsync(string username, string passwordHash, string legacyPlainPassword);
    Task<IEnumerable<AdminAgentDbModel>> GetAdminAgentsAsync();
    Task UpdateAgentPasswordHashAsync(int userId, string passwordHash);
    Task DeleteAgentAsync(int userId);
    Task<int> AddAgentAsync(string username, int? staffId, string passwordHash);
}
