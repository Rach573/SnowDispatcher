using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public interface IMailRepository
{
    Task<IEnumerable<MailDbModel>> GetAllAsync();
    Task<MailDbModel?> GetByIdAsync(int id);
}
