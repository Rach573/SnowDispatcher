namespace SnowDispatcher.Core.UseCases.Assignment;

public interface IAssignMailUseCases
{
    Task AssignMailToAgentAsync(int mailId, int? agentUserId);
}
