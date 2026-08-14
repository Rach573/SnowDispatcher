using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Staff;

public interface IStaffUseCases
{
    Task<IEnumerable<Models.Staff>> GetAllStaffAsync();
    Task<int> AddStaffAsync(string nomComplet, string adresseMail, string statutHierarchique, int nombre_enfants);
    Task DeleteStaffAsync(int id);
}
