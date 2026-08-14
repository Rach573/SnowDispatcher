using Dapper;
using SnowDispatcher.Infrastructure.Data;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public UserRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<UserAuthDbModel?> AuthenticateAsync(string username, string passwordHash, string legacyPlainPassword)
    {
        const string sql = @"
            SELECT
                id AS UserId,
                username AS Username,
                role AS Role
            FROM users
            WHERE username = @username
              AND (password_hash = @passwordHash OR password_hash = @legacyPlainPassword)
            LIMIT 1;";

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QuerySingleOrDefaultAsync<UserAuthDbModel>(
            sql,
            new { username, passwordHash, legacyPlainPassword });
    }

    public async Task UpdateAgentPasswordHashAsync(int userId, string passwordHash)
    {
        const string sql = "UPDATE users SET password_hash = @passwordHash WHERE id = @userId AND role = 'agent';";

        using var connection = _connectionFactory.CreateConnection();
        await connection.ExecuteAsync(sql, new { userId, passwordHash });
    }

    public async Task<IEnumerable<AgentDashboardInfoDbModel>> GetAgentDashboardInfoAsync()
    {
        const string sql = """
            SELECT
                u.id AS UserId,
                u.username AS Username,
                u.staff_id AS StaffId,
                u.nombre_enfants AS NombreEnfants,
                COALESCE(s.nom_complet, u.username) AS NomComplet,
                COALESCE(s.adresse_mail, '') AS AdresseMail,
                COALESCE(s.statut_hierarchique, 'Agent') AS StatutHierarchique,
                COUNT(t.id) AS ActiveMailCount
            FROM users u
            LEFT JOIN staff s ON s.id = u.staff_id
            LEFT JOIN taches t ON t.agent_user_id = u.id
            WHERE u.role = 'agent'
            GROUP BY u.id, u.username, u.staff_id, u.nombre_enfants, s.nom_complet, s.adresse_mail, s.statut_hierarchique
            ORDER BY NomComplet, u.username;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QueryAsync<AgentDashboardInfoDbModel>(sql);
    }

    public async Task<int> AddAgentDashboardInfoAsync(string username, int? staffId,string passwordHash, int nombreEnfants)
    {
        const string sql = @"
            INSERT INTO users (username, staff_id, password_hash, nombre_enfants, role)
            VALUES (@username, @staffId, @passwordHash, @nombreEnfants, 'agent');
            SELECT LAST_INSERT_ID();";

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QuerySingleAsync<int>(sql, new { username, staffId, passwordHash, nombreEnfants });
    }

    public async Task DeleteAgentDashboardInfoAsync(int userId)
    {
        using var connection = _connectionFactory.CreateConnection();
        connection.Open();
        using var transaction = connection.BeginTransaction();

        await connection.ExecuteAsync(
            "UPDATE taches SET agent_user_id = NULL WHERE agent_user_id = @userId;",
            new { userId },
            transaction);
        await connection.ExecuteAsync(
            "DELETE FROM users WHERE id = @userId AND role = 'agent';",
            new { userId },
            transaction);

        transaction.Commit();
    }

}
