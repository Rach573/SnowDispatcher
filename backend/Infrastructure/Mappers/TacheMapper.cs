using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Mappers;

public static class TacheMapper
{
    public static Tache ToCore(TacheDbModel tache)
    {
        return new Tache
        {
            Id = tache.Id,
            MailId = tache.MailId,
            AgentId = tache.AgentId,
            Priority = tache.Priority,
            Status = tache.Status,
            CreatedAt = tache.CreatedAt
        };
    }

    public static TacheDbModel ToDb(Tache tache)
    {
        return new TacheDbModel
        {
            Id = tache.Id,
            MailId = tache.MailId,
            AgentId = tache.AgentId,
            Priority = tache.Priority,
            Status = tache.Status,
            CreatedAt = tache.CreatedAt
        };
    }
}
