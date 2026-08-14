namespace SnowDispatcher.Core.Models;

public class Staff
{
    public int Id { get; set; }
    public string NomComplet { get; set; } = "";
    public string AdresseMail { get; set; } = "";
    public string StatutHierarchique { get; set; } = "";
    public int NombreEnfants { get; set; } = 0;
}
