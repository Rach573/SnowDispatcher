using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Admin;

public class AdminUseCases : IAdminUseCases
{
    private readonly IUserGateway _userGateway;
    private readonly ITacheGateway _tacheGateway;

    public AdminUseCases(IUserGateway userGateway, ITacheGateway tacheGateway)
    {
        _userGateway = userGateway;
        _tacheGateway = tacheGateway;
    }

    public Task<IEnumerable<AdminAgent>> GetAgentsAsync()
    {
        return _userGateway.GetAdminAgentsAsync();
    }

    public async Task<IEnumerable<AdminMailAssignment>> GetMailAssignmentsAsync()
    {
        var assignments = await _tacheGateway.GetAdminMailAssignmentsAsync();

        return assignments.OrderBy(mail => mail.ReceivedAt);
    }

    public async Task<IEnumerable<AdminMailAssignment>> GetMailsForAgentAsync(int agentUserId)
    {
        var mails = await _tacheGateway.GetMailsForAgentAsync(agentUserId);

        return mails.OrderBy(mail => mail.ReceivedAt);
    }

    public Task DeleteAgentAsync(int userId)
    {
        return _userGateway.DeleteAgentAsync(userId);
    }

    public Task<int> AddAgentAsync(string username, int? staffId, string passwordHash)
    {
        return _userGateway.AddAgentAsync(username, staffId, passwordHash);
    }
}
