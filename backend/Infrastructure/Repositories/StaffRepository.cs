using Dapper;
using SnowDispatcher.Infrastructure.Data;
using SnowDispatcher.Infrastructure.Models;

namespace SnowDispatcher.Infrastructure.Repositories;

public class StaffRepository : IStaffRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public StaffRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<IEnumerable<StaffDbModel>> GetAllAsync()
    {
        const string sql = """
            SELECT
                id,
                nom_complet AS NomComplet,
                adresse_mail AS AdresseMail,
                statut_hierarchique AS StatutHierarchique,
                nombre_enfants AS NombreEnfants
            FROM staff
            ORDER BY statut_hierarchique, id;
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QueryAsync<StaffDbModel>(sql);
    }

    public async Task<int> AddAsync(string nomComplet, string adresseMail, string statutHierarchique, int nombre_enfants)
    {
        const string sql = """
            INSERT INTO staff (nom_complet, adresse_mail, statut_hierarchique, nombre_enfants)
            VALUES (@nomComplet, @adresseMail, @statutHierarchique, @nombre_enfants);
            SELECT LAST_INSERT_ID();
            """;

        using var connection = _connectionFactory.CreateConnection();
        return await connection.QuerySingleAsync<int>(sql, new { nomComplet, adresseMail, statutHierarchique, nombre_enfants });
    }

    public async Task DeleteAsync(int id)
    {
        const string sql = "DELETE FROM staff WHERE id = @id;";

        using var connection = _connectionFactory.CreateConnection();
        await connection.ExecuteAsync(sql, new { id });
    }
}
