using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Mail;

public interface IMailUseCases
{
    Task<IEnumerable<Models.Mail>> GetAllMailsAsync();
    Task<Models.Mail?> GetMailByIdAsync(int id);
}
