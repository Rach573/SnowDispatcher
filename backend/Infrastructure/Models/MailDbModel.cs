namespace SnowDispatcher.Infrastructure.Models;

public class MailDbModel
{
    public int Id { get; set; }
    public string SenderEmail { get; set; } = "";
    public string Subject { get; set; } = "";
    public string Body { get; set; } = "";
    public DateTime ReceivedAt { get; set; }
    public int StaffId { get; set; }
}
