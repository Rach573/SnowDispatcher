using System.Security.Cryptography;
using System.Text;
using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Account;

public class AccountUseCases : IAccountUseCases
{
    private readonly IUserGateway _userGateway;

    public AccountUseCases(IUserGateway userGateway)
    {
        _userGateway = userGateway;
    }

    public async Task<AuthenticatedUser?> LoginAsync(string username, string password)
    {
        if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
        {
            return null;
        }

        var passwordHash = HashPassword(password);
        return await _userGateway.AuthenticateAsync(username.Trim(), passwordHash, password);
    }

    public async Task UpdateAgentPasswordAsync(int userId, string password)
    {
        if (userId <= 0)
        {
            throw new ArgumentException("L'identifiant agent est invalide.", nameof(userId));
        }

        if (string.IsNullOrWhiteSpace(password))
        {
            throw new ArgumentException("Le mot de passe est requis.", nameof(password));
        }

        await _userGateway.UpdateAgentPasswordHashAsync(userId, HashPassword(password));
    }

    private static string HashPassword(string password)
    {
        return Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(password))).ToLowerInvariant();
    }
}
