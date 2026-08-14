using Dapper;
using SnowDispatcher.Infrastructure.Data;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public class MailRepository : IMailRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public MailRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<IEnumerable<MailDbModel>> GetAllAsync()
    {
        const string sql = """
            SELECT
                m.id,
                COALESCE(s.adresse_mail, '') AS SenderEmail,
                m.objet AS Subject,
                COALESCE(m.contenu, '') AS Body,
                m.date_reception AS ReceivedAt,
                COALESCE(m.expediteur_staff_id, 0) AS StaffId
            FROM mail m
            LEFT JOIN staff s ON s.id = m.expediteur_staff_id
            ORDER BY m.date_reception DESC;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QueryAsync<MailDbModel>(sql);
    }

    public async Task<MailDbModel?> GetByIdAsync(int id)
    {
        const string sql = """
            SELECT
                m.id,
                COALESCE(s.adresse_mail, '') AS SenderEmail,
                m.objet AS Subject,
                COALESCE(m.contenu, '') AS Body,
                m.date_reception AS ReceivedAt,
                COALESCE(m.expediteur_staff_id, 0) AS StaffId
            FROM mail m
            LEFT JOIN staff s ON s.id = m.expediteur_staff_id
            WHERE m.id = @Id;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QuerySingleOrDefaultAsync<MailDbModel>(sql, new { Id = id });
    }
}
