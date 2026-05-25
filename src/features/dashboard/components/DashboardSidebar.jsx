import Link from "next/link";

import { VoyaMark } from "@/src/components/brand/VoyaLogo";

export default function DashboardSidebar({ items }) {
  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] w-20 shrink-0 rounded-[28px] border border-[#e1e1e1] bg-white/70 p-3 lg:block">
      <div className="flex h-full flex-col items-center gap-5">
        <VoyaMark className="mt-2 h-8 w-12" />
        <nav className="mt-8 flex flex-1 flex-col items-center gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition ${
                  item.active
                    ? "bg-[var(--color-brand-soft)] text-[var(--color-brand-primary-deep)]"
                    : "text-[#727272] hover:bg-[#f6f3f2] hover:text-[#1c1b1b]"
                }`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
