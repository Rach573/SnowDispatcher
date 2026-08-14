using SnowDispatcher.Core.Models;

namespace SnowDispatcher.Core.UseCases.Dispatch;

public interface IDispatchUseCases
{
    string CalculerPriorite(string statutHierarchique);
    Task<SnowDispatcher.Core.Models.Tache> CreerTacheDepuisMailAsync(int mailId);
}
