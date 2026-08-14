namespace SnowDispatcher.Infrastructure.Models;

public class StaffDbModel
{
    public int Id { get; set; }
    public string NomComplet { get; set; } = "";
    public string AdresseMail { get; set; } = "";
    public string StatutHierarchique { get; set; } = "";
    public int  NombreEnfants { get; set; } = 0;
}
