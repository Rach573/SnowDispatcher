namespace SnowDispatcher.Core.Models;

public class AgentDashboardInfo
{
    public int UserId { get; set; }
    public string Username { get; set; } = string.Empty;
    public int? StaffId { get; set; }
    public string NomComplet { get; set; } = string.Empty;
    public string AdresseMail { get; set; } = string.Empty;
    public string StatutHierarchique { get; set; } = string.Empty;
    public int ActiveMailCount { get; set; }
    public int NombreEnfants { get; set; }
}
