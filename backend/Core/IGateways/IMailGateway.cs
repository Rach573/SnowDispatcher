using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.IGateways;

public interface IMailGateway
{
    Task<IEnumerable<Mail>> GetAllAsync();
    Task<Mail?> GetByIdAsync(int id);
}
