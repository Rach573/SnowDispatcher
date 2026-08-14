using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.IGateways;

public interface IStaffGateway
{
    Task<IEnumerable<Staff>> GetAllAsync();
    Task<int> AddAsync(string nomComplet, string adresseMail, string statutHierarchique, int nombre_enfants);
    Task DeleteAsync(int id);
}
