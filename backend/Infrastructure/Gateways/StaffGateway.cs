using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Mappers;
using SnowDispatcher.Infrastructure.Repositories;

namespace SnowDispatcher.Infrastructure.Gateways;

public class StaffGateway : IStaffGateway
{
    private readonly IStaffRepository _repository;

    public StaffGateway(IStaffRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Staff>> GetAllAsync()
    {
        var staff = await _repository.GetAllAsync();
        return staff.Select(StaffMapper.ToCore);
    }

    public Task<int> AddAsync(string nomComplet, string adresseMail, string statutHierarchique, int nombre_enfants)
    {
        return _repository.AddAsync(nomComplet, adresseMail, statutHierarchique, nombre_enfants);
    }

    public Task DeleteAsync(int id)
    {
        return _repository.DeleteAsync(id);
    }
}
