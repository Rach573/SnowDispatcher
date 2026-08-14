using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Mappers;

public static class StaffMapper
{
    public static Staff ToCore(StaffDbModel staff)
    {
        return new Staff
        {
            Id = staff.Id,
            NomComplet = staff.NomComplet,
            AdresseMail = staff.AdresseMail,
            StatutHierarchique = staff.StatutHierarchique,
            NombreEnfants = staff.NombreEnfants
        };
    }
}
