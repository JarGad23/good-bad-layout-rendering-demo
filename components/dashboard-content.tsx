import AnimatedCounter from "./animated-counter";

export default function DashboardContent() {
  return (
    <div className="ml-64 p-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Witaj, Admin 👋</h1>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          + Nowy Raport
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Przychód dzisiaj (PLN)"
          value={<AnimatedCounter value={4250} />}
          trend="+12%"
        />
        <StatCard
          title="Aktywni użytkownicy"
          value={<AnimatedCounter value={1240} />}
          trend="+5%"
        />
        <StatCard
          title="Nowe zamówienia"
          value={<AnimatedCounter value={34} />}
          trend="-2%"
        />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  trend,
}: {
  title: string;
  value: React.ReactNode;
  trend: string;
}) {
  const isPositive = trend.startsWith("+");
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          } bg-opacity-10 px-2 py-1 rounded`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}
