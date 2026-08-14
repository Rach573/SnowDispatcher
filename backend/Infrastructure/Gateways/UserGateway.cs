using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Mappers;
using SnowDispatcher.Infrastructure.Repositories;

namespace SnowDispatcher.Infrastructure.Gateways;

public class UserGateway : IUserGateway
{
    private readonly IUserRepository _userRepository;

    public UserGateway(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<AuthenticatedUser?> AuthenticateAsync(string username, string passwordHash, string legacyPlainPassword)
    {
        var user = await _userRepository.AuthenticateAsync(username, passwordHash, legacyPlainPassword);
        if (user is null)
        {
            return null;
        }

        return new AuthenticatedUser
        {
            UserId = user.UserId,
            Username = user.Username,
            Role = user.Role
        };
    }

    public Task UpdateAgentPasswordHashAsync(int userId, string passwordHash)
    {
        return _userRepository.UpdateAgentPasswordHashAsync(userId, passwordHash);
    }

    public async Task<IEnumerable<AdminAgent>> GetAdminAgentsAsync()
    {
        var agents = await _userRepository.GetAdminAgentsAsync();
        return agents.Select(AdminMapper.ToCore);
    }

    public Task DeleteAgentAsync(int userId)
    {
        return _userRepository.DeleteAgentAsync(userId);
    }

    public Task<int> AddAgentAsync(string username, int? staffId, string passwordHash, int nombreEnfants)
    {
        return _userRepository.AddAgentAsync(username, staffId, passwordHash, nombreEnfants); 
    }
}
