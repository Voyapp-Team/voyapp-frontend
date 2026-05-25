import MetricCard from "./MetricCard";

export default function BalanceOverview({ balances }) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {balances.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </section>
  );
}
