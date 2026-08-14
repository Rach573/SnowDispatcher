using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public interface IStaffRepository
{
    Task<IEnumerable<StaffDbModel>> GetAllAsync();
    Task<int> AddAsync(string nomComplet, string adresseMail, string statutHierarchique, int nombre_enfants);
    Task DeleteAsync(int id);
}
