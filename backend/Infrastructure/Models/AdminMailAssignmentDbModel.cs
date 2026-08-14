namespace SnowDispatcher.Infrastructure.Models;

public class AdminMailAssignmentDbModel
{
    public int MailId { get; set; }
    public string Subject { get; set; } = string.Empty;
    public string Body { get; set; } = string.Empty;
    public DateTime ReceivedAt { get; set; }
    public int? SenderStaffId { get; set; }
    public string SenderName { get; set; } = string.Empty;
    public string SenderEmail { get; set; } = string.Empty;
    public int? TaskId { get; set; }
    public int? AgentUserId { get; set; }
    public string AgentUsername { get; set; } = string.Empty;
    public string AgentName { get; set; } = string.Empty;
    public string Priority { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
}
