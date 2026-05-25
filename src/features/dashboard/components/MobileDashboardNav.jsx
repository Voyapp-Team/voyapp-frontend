import Link from "next/link";

export default function MobileDashboardNav({ items }) {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-3 rounded-[28px] border border-[#e1e1e1] bg-white/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-xs font-bold transition ${
              item.active
                ? "bg-[var(--color-brand-soft)] text-[var(--color-brand-primary-deep)]"
                : "text-[#727272]"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
