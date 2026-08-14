namespace SnowDispatcher.Infrastructure.Models;

public class TacheDbModel
{
    public int Id { get; set; }
    public int MailId { get; set; }
    public int? AgentId { get; set; }
    public string Priority { get; set; } = "";
    public string Status { get; set; } = "";
    public DateTime CreatedAt { get; set; }
}
