namespace SnowDispatcher.Core.Abstractions;

public interface IDateTimeProvider
{
    DateTime Now { get; }
}
