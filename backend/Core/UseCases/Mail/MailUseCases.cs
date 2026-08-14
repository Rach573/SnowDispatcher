using SnowDispatcher.Core.IGateways;

namespace SnowDispatcher.Core.UseCases.Mail;

public class MailUseCases : IMailUseCases
{
    private readonly IMailGateway _mailGateway;

    public MailUseCases(IMailGateway mailGateway)
    {
        _mailGateway = mailGateway;
    }

    public async Task<IEnumerable<Models.Mail>> GetAllMailsAsync()
    {
        var mails = await _mailGateway.GetAllAsync();

        return mails.OrderBy(mail => mail.ReceivedAt);
    }

    public Task<Models.Mail?> GetMailByIdAsync(int id)
    {
        return _mailGateway.GetByIdAsync(id);
    }
}
