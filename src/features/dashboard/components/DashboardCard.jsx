export default function DashboardCard({ children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border border-[#e9e3e1] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] ${className}`.trim()}
    >
      {children}
    </section>
  );
}
