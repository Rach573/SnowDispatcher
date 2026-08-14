namespace SnowDispatcher.Core.Models;

public class AuthenticatedUser
{
    public int UserId { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
}
