using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Account;

public interface IAccountUseCases
{
    Task<AuthenticatedUser?> LoginAsync(string username, string password);
    Task UpdateAgentPasswordAsync(int userId, string password);
}
