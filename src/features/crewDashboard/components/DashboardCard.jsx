export default function DashboardCard({ children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border border-[#e9e3e1] bg-white ${className}`.trim()}
    >
      {children}
    </section>
  );
}
