import DashboardCard from "./DashboardCard";
import { ShieldCheckDashIcon } from "./DashboardIcons";

export default function ProfileSummary({ user }) {
  return (
    <DashboardCard className="p-5" id="profile">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-primary-deep)] text-xl font-extrabold text-white">
          {user.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-extrabold text-[#1c1b1b]">
            {user.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-[var(--color-brand-primary-deep)]">
            {user.handle}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[#f8f8f8] p-4">
        <div className="flex items-start gap-3">
          <ShieldCheckDashIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-brand-primary-deep)]" />
          <div>
            <p className="text-sm font-extrabold text-[#1c1b1b]">
              {user.tier}
            </p>
            <p className="mt-1 text-sm font-medium leading-5 text-[#6c7a76]">
              Security checks are active across wallet and profile changes.
            </p>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
