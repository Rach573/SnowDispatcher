namespace SnowDispatcher.Api.Models;

public class Tache
{
    public int Id { get; set; }

    public int MailId { get; set; }

    public int? AgentId { get; set; }

    public string Priority { get; set; } = "";

    public string Status { get; set; } = "Nouvelle";

    public DateTime CreatedAt { get; set; } = DateTime.Now;
}