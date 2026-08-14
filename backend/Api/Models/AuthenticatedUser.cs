namespace SnowDispatcher.Api.Models;

public class AuthenticatedUser
{
    public int UserId { get; set; }
    public string Username { get; set; } = "";
    public string Role { get; set; } = "";
}
