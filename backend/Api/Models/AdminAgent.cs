namespace SnowDispatcher.Api.Models;

public class AdminAgent
{
    public int UserId { get; set; }
    public string Username { get; set; } = "";
    public int? StaffId { get; set; }
    public string NomComplet { get; set; } = "";
    public string AdresseMail { get; set; } = "";
    public string StatutHierarchique { get; set; } = "";
    public int ActiveMailCount { get; set; }
}
