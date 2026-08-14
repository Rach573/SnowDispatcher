using SnowDispatcher.Core.IGateways;

namespace SnowDispatcher.Core.UseCases.Staff;

public class StaffUseCases : IStaffUseCases
{
    private readonly IStaffGateway _staffGateway;

    public StaffUseCases(IStaffGateway staffGateway)
    {
        _staffGateway = staffGateway;
    }

    public Task<IEnumerable<Models.Staff>> GetAllStaffAsync()
    {
        return _staffGateway.GetAllAsync();
    }

    public Task<int> AddStaffAsync(string nomComplet, string adresseMail, string statutHierarchique, int nombre_enfants)
    {
        return _staffGateway.AddAsync(nomComplet, adresseMail, statutHierarchique, nombre_enfants);
    }

    public Task DeleteStaffAsync(int id)
    {
        return _staffGateway.DeleteAsync(id);
    }
}
