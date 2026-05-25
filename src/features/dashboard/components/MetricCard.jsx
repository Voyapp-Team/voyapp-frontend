const toneClasses = {
  primary:
    "bg-[linear-gradient(135deg,var(--color-brand-primary-deep),var(--color-brand-accent))] text-white",
  soft: "bg-[#f5fffc] text-[#1c1b1b]",
  light: "bg-[#fcf8f8] text-[#1c1b1b]",
};

export default function MetricCard({ metric }) {
  const isPrimary = metric.tone === "primary";

  return (
    <div
      className={`min-h-36 rounded-2xl p-5 ${toneClasses[metric.tone] || toneClasses.light}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={`text-sm font-semibold ${isPrimary ? "text-white/80" : "text-[#6c7a76]"}`}
        >
          {metric.label}
        </p>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${isPrimary ? "bg-white/15 text-white" : "bg-white text-[var(--color-brand-primary-deep)]"}`}
        >
          {metric.trend}
        </span>
      </div>
      <p className="mt-5 text-3xl font-extrabold tracking-normal">
        {metric.value}
      </p>
      <p
        className={`mt-2 text-sm font-medium ${isPrimary ? "text-white/75" : "text-[#6c7a76]"}`}
      >
        {metric.detail}
      </p>
    </div>
  );
}
