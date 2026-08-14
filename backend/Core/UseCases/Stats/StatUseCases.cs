using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Stats;

public class StatUseCases : IStatsUseCases
{
    private readonly ITacheGateway _tacheGateway;
    private readonly IStaffGateway _staffGateway;
    private readonly IMailGateway _mailGateway;
    private readonly IUserGateway _userGateway;

    public StatUseCases(ITacheGateway tacheGateway, IStaffGateway staffGateway, IMailGateway mailGateway, IUserGateway userGateway)
    {
        _tacheGateway = tacheGateway;
        _staffGateway = staffGateway;
        _mailGateway = mailGateway;
        _userGateway = userGateway;
    }

    public async Task<IEnumerable<Stat>> GetMailStatsByPriorityAsync()
    {
        var mails = await _tacheGateway.GetAdminMailAssignmentsAsync();

        return mails
            .Where(m => !string.IsNullOrWhiteSpace(m.Priority))
            .GroupBy(m => m.Priority)
            .Select(g => new Stat
            {
                Label = g.Key,
                Count = g.Count()
            })
            .OrderBy(stat => stat.Label);
    }

    public async Task<IEnumerable<Stat>> GetMailStatsByStatusAsync()
    {
        var mails = await _tacheGateway.GetAdminMailAssignmentsAsync();

        return mails
            .Where(m => !string.IsNullOrWhiteSpace(m.Status))
            .GroupBy(m => m.Status)
            .Select(g => new Stat
            {
                Label = g.Key,
                Count = g.Count()
            })
            .OrderBy(stat => stat.Label);
    }

    public async Task<IEnumerable<Stat>> GetMailStatsByChildrenAsync()
    {
        var agents = await _userGateway.GetAgentDashboardInfoAsync();
        var mails = await _tacheGateway.GetAdminMailAssignmentsAsync();

        return mails
            .Where(m => 
            
                m.Status == "Résolu" &&
                m.AgentUserId.HasValue)
            .Select(m => new
            {
                HasChildren = agents.Any(a => a.UserId == m.AgentUserId.GetValueOrDefault() && a.NombreEnfants > 0)
            })
            .GroupBy(x => x.HasChildren ? "Avec enfants" : "Sans enfants")
            .Select(g => new Stat
            {
                Label = g.Key,
                Count = g.Count()
            })
            .OrderBy(stat => stat.Label);
    }
             
    
}