import Link from "next/link";

import DashboardCard from "./DashboardCard";

export default function QuickActions({ actions }) {
  return (
    <DashboardCard className="p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-[#1c1b1b]">
            Quick actions
          </h2>
          <p className="mt-1 text-sm font-medium text-[#6c7a76]">
            Move money without digging through menus.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="group flex min-h-24 items-center gap-4 rounded-2xl border border-[#bbcac4]/20 bg-[#f8f8f8] p-4 transition hover:border-[var(--color-brand-border)] hover:bg-white"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#65fade]/20 text-[var(--color-brand-primary-deep)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold text-[#1c1b1b]">
                  {action.label}
                </span>
                <span className="mt-1 block text-sm font-medium text-[#6c7a76]">
                  {action.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </DashboardCard>
  );
}
