using SnowDispatcher.Core.Abstractions;

namespace SnowDispatcher.Infrastructure.Utils;

public class DateTimeProvider : IDateTimeProvider
{
    public DateTime Now => DateTime.Now;
}
