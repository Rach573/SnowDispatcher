namespace SnowDispatcher.Infrastructure.Models;

public class UserAuthDbModel
{
    public int UserId { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public int NombreEnfants { get; set; } // Ajout de la propriété NombreEnfants
}
