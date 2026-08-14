using Dapper;
using SnowDispatcher.Infrastructure.Data;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public class TacheRepository : ITacheRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public TacheRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<IEnumerable<TacheDbModel>> GetAllAsync()
    {
        const string sql = """
            SELECT
                id,
                mail_id AS MailId,
                agent_user_id AS AgentId,
                priorite_calculee AS Priority,
                statut_tache AS Status,
                COALESCE(date_attribution, NOW()) AS CreatedAt
            FROM taches
            ORDER BY date_attribution DESC, id DESC;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QueryAsync<TacheDbModel>(sql);
    }

    public async Task<TacheDbModel> CreateAsync(TacheDbModel tache)
    {
        const string sql = """
            INSERT INTO taches (mail_id, agent_user_id, priorite_calculee, statut_tache, date_attribution)
            VALUES (@MailId, @AgentId, @Priority, @Status, @CreatedAt);

            SELECT LAST_INSERT_ID();
            """;

        using var connection = _connectionFactory.CreateConnection();
        var id = await connection.ExecuteScalarAsync<int>(sql, tache);
        tache.Id = id;
        return tache;
    }

    public async Task AssignMailToAgentAsync(int mailId, int? agentUserId)
    {
        const string existingTaskSql = "SELECT id FROM taches WHERE mail_id = @mailId ORDER BY id LIMIT 1;";
        const string updateSql = """
            UPDATE taches
            SET agent_user_id = @agentUserId,
                statut_tache = 'Assigné',
                date_attribution = NOW()
            WHERE id = @taskId;
            """;
        const string insertSql = """
            INSERT INTO taches (mail_id, agent_user_id, statut_tache, priorite_calculee, date_attribution)
            VALUES (@mailId, @agentUserId, 'Assigné', 'Normale', NOW());
            """;

        using var connection = _connectionFactory.CreateConnection();
        var taskId = await connection.QuerySingleOrDefaultAsync<int?>(existingTaskSql, new { mailId });

        if (taskId is null)
        {
            await connection.ExecuteAsync(insertSql, new { mailId, agentUserId });
            return;
        }

        await connection.ExecuteAsync(updateSql, new { taskId, agentUserId });
    }

    public async Task AssignTaskToAgentAsync(int taskId, int? agentId)
    {
        const string sql = """
            UPDATE taches
            SET agent_user_id = @agentId
            WHERE id = @taskId;
            """;

        using var connection = _connectionFactory.CreateConnection();
        await connection.ExecuteAsync(sql, new { taskId, agentId });
    }

    public async Task DeleteAsync(int id)
    {
        const string sql = "DELETE FROM taches WHERE id = @id;";

        using var connection = _connectionFactory.CreateConnection();
        await connection.ExecuteAsync(sql, new { id });
    }

    public async Task<IEnumerable<AdminMailAssignmentDbModel>> GetAdminMailAssignmentsAsync()
    {
        const string sql = """
            SELECT
                m.id AS MailId,
                m.objet AS Subject,
                COALESCE(m.contenu, '') AS Body,
                m.date_reception AS ReceivedAt,
                m.expediteur_staff_id AS SenderStaffId,
                COALESCE(sender.nom_complet, '') AS SenderName,
                COALESCE(sender.adresse_mail, '') AS SenderEmail,
                t.id AS TaskId,
                t.agent_user_id AS AgentUserId,
                COALESCE(u.username, '') AS AgentUsername,
                COALESCE(agent.nom_complet, u.username, '') AS AgentName,
                COALESCE(t.priorite_calculee, '') AS Priority,
                COALESCE(t.statut_tache, 'Non attribue') AS Status
            FROM mail m
            LEFT JOIN staff sender ON sender.id = m.expediteur_staff_id
            LEFT JOIN taches t ON t.mail_id = m.id
            LEFT JOIN users u ON u.id = t.agent_user_id
            LEFT JOIN staff agent ON agent.id = u.staff_id
            ORDER BY m.date_reception DESC, m.id DESC;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QueryAsync<AdminMailAssignmentDbModel>(sql);
    }

    public async Task<IEnumerable<AdminMailAssignmentDbModel>> GetMailsForAgentAsync(int agentUserId)
    {
        const string sql = """
            SELECT
                m.id AS MailId,
                m.objet AS Subject,
                COALESCE(m.contenu, '') AS Body,
                m.date_reception AS ReceivedAt,
                m.expediteur_staff_id AS SenderStaffId,
                COALESCE(sender.nom_complet, '') AS SenderName,
                COALESCE(sender.adresse_mail, '') AS SenderEmail,
                t.id AS TaskId,
                t.agent_user_id AS AgentUserId,
                COALESCE(u.username, '') AS AgentUsername,
                COALESCE(agent.nom_complet, u.username, '') AS AgentName,
                COALESCE(t.priorite_calculee, '') AS Priority,
                COALESCE(t.statut_tache, '') AS Status
            FROM taches t
            INNER JOIN mail m ON m.id = t.mail_id
            LEFT JOIN staff sender ON sender.id = m.expediteur_staff_id
            LEFT JOIN users u ON u.id = t.agent_user_id
            LEFT JOIN staff agent ON agent.id = u.staff_id
            WHERE t.agent_user_id = @agentUserId
            ORDER BY m.date_reception DESC, m.id DESC;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QueryAsync<AdminMailAssignmentDbModel>(sql, new { agentUserId });
    }

    public async Task MarkTaskAsTreatedAsync(int taskId, int agentUserId)
    {
        const string sql = """
            UPDATE taches
            SET statut_tache = 'Résolu'
            WHERE id = @taskId AND agent_user_id = @agentUserId;
            """;

        using var connection = _connectionFactory.CreateConnection();
        await connection.ExecuteAsync(sql, new { taskId, agentUserId });
    }
}
