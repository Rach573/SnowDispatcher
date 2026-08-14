using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SnowDispatcher.Core.Abstractions;
using SnowDispatcher.Core.IGateways;
using SnowDispatcher.Infrastructure.Data;
using SnowDispatcher.Infrastructure.Gateways;
using SnowDispatcher.Infrastructure.Repositories;
using SnowDispatcher.Infrastructure.Utils;


namespace SnowDispatcher.Infrastructure.Extensions;

public static class ServiceCollectionExtension
{
    public static IServiceCollection AddInfrastructureServices(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddSingleton<IDbConnectionFactory, MySqlConnectionFactory>();
        services.AddSingleton<IDateTimeProvider, DateTimeProvider>();

        services.AddScoped<IStaffRepository, StaffRepository>();
        services.AddScoped<IMailRepository, MailRepository>();
        services.AddScoped<ITacheRepository, TacheRepository>();
        services.AddScoped<IUserRepository, UserRepository>();


        services.AddScoped<IStaffGateway, StaffGateway>();
        services.AddScoped<IMailGateway, MailGateway>();
        services.AddScoped<ITacheGateway, TacheGateway>();
        services.AddScoped<IUserGateway, UserGateway>();

        return services;
    }
}
