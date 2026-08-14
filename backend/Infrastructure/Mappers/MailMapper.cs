using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Mappers;

public static class MailMapper
{
    public static Mail ToCore(MailDbModel mail)
    {
        return new Mail
        {
            Id = mail.Id,
            SenderEmail = mail.SenderEmail,
            Subject = mail.Subject,
            Body = mail.Body,
            ReceivedAt = mail.ReceivedAt,
            StaffId = mail.StaffId
        };
    }
}
