using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Mappers;
using SnowDispatcher.Infrastructure.Repositories;

namespace SnowDispatcher.Infrastructure.Gateways;

public class MailGateway : IMailGateway
{
    private readonly IMailRepository _repository;

    public MailGateway(IMailRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Mail>> GetAllAsync()
    {
        var mails = await _repository.GetAllAsync();
        return mails.Select(MailMapper.ToCore);
    }

    public async Task<Mail?> GetByIdAsync(int id)
    {
        var mail = await _repository.GetByIdAsync(id);
        return mail is null ? null : MailMapper.ToCore(mail);
    }
}
