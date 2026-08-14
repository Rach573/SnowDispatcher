namespace SnowDispatcher.Api.Models;

public class CreateAgentRequest
{    
    public string Username { get; set; } = "";
    public string Password { get; set; } = "";
    public int? StaffId { get; set; }
    public int NombreEnfants { get; set; } 
}