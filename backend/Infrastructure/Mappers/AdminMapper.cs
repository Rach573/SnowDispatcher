using SnowDispatcher.Core.Models;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Mappers;

public static class AdminMapper
{
    public static AgentDashboardInfo ToCore(AgentDashboardInfoDbModel agent)
    {
        return new AgentDashboardInfo
        {
            UserId = agent.UserId,
            Username = agent.Username,
            StaffId = agent.StaffId,
            NombreEnfants = agent.NombreEnfants,
            NomComplet = agent.NomComplet,
            AdresseMail = agent.AdresseMail,
            StatutHierarchique = agent.StatutHierarchique,
            ActiveMailCount = agent.ActiveMailCount
        };
    }

    public static AdminMailAssignment ToCore(AdminMailAssignmentDbModel mail)
    {
        return new AdminMailAssignment
        {
            MailId = mail.MailId,
            Subject = mail.Subject,
            Body = mail.Body,
            ReceivedAt = mail.ReceivedAt,
            SenderStaffId = mail.SenderStaffId,
            SenderName = mail.SenderName,
            SenderEmail = mail.SenderEmail,
            TaskId = mail.TaskId,
            AgentUserId = mail.AgentUserId,
            AgentUsername = mail.AgentUsername,
            AgentName = mail.AgentName,
            Priority = mail.Priority,
            Status = mail.Status
        };
    }
}
