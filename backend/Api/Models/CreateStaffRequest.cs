using System.Text.Json.Serialization;

namespace SnowDispatcher.Api.Models;

public class CreateStaffRequest
{
    [JsonPropertyName("nom_complet")]
    public string NomComplet { get; set; } = string.Empty;

    [JsonPropertyName("adresse_mail")]
    public string AdresseMail { get; set; } = string.Empty;

    [JsonPropertyName("statut_hierarchique")]
    public string StatutHierarchique { get; set; } = string.Empty;

    [JsonPropertyName("nombre_enfants")]
    public int NombreEnfants { get; set; } = 0;
}
