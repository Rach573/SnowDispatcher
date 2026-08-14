using Microsoft.Extensions.DependencyInjection;
using SnowDispatcher.Core.UseCases.Admin;
using SnowDispatcher.Core.UseCases.Agent;
using SnowDispatcher.Core.UseCases.Account;
using SnowDispatcher.Core.UseCases.Assignment;
using SnowDispatcher.Core.UseCases.Dispatch;
using SnowDispatcher.Core.UseCases.Mail;
using SnowDispatcher.Core.UseCases.Staff;
using SnowDispatcher.Core.UseCases.Stats;
using SnowDispatcher.Core.UseCases.Tache;

namespace SnowDispatcher.Core.Extensions;

public static class ServiceCollectionExtension
{
    public static IServiceCollection AddCoreServices(this IServiceCollection services)
    {
        services.AddScoped<IStaffUseCases, StaffUseCases>();
        services.AddScoped<IDispatchUseCases, DispatchUseCases>();
        services.AddScoped<ITacheUseCases, TacheUseCases>();
        services.AddScoped<IAssignMailUseCases, AssignMailUseCases>();
        services.AddScoped<IAccountUseCases, AccountUseCases>();
        services.AddScoped<IMailUseCases, MailUseCases>();
        services.AddScoped<IAdminUseCases, AdminUseCases>();
        services.AddScoped<IAgentUseCases, AgentUseCases>();
        services.AddScoped<IStatsUseCases, StatUseCases>();

        return services;
    }
}
