namespace SnowDispatcher.Api.Models;

public class AdminMailAssignment
{
    public int MailId { get; set; }
    public string Subject { get; set; } = "";
    public string Body { get; set; } = "";
    public DateTime ReceivedAt { get; set; }
    public int? SenderStaffId { get; set; }
    public string SenderName { get; set; } = "";
    public string SenderEmail { get; set; } = "";
    public int? TaskId { get; set; }
    public int? AgentUserId { get; set; }
    public string AgentUsername { get; set; } = "";
    public string AgentName { get; set; } = "";
    public string Priority { get; set; } = "";
    public string Status { get; set; } = "";
}
