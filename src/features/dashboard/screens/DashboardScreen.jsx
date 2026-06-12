import Link from "next/link";

import DashboardTopBar from "../../../components/ui/TopBar";
import DashboardSidebar from "../../../components/ui/Sidebar";
import BalanceOverview from "../components/BalanceOverview";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";
import ProfileSummary from "../components/ProfileSummary";
import MobileDashboardNav from "../../../components/ui/MobileNav";
import {
  balances,
  dashboardUser,
  quickActions,
  sidebarItems,
} from "../data/dashboardData";

export default function DashboardScreen() {
  return (
    <div className="min-w-0 flex-1 lg:max-w-[860px] mx-auto space-y-3 lg:space-y-4">
      <h1 className="text-lg font-semibold text-[#006b5c] lg:block">
        Hello, {dashboardUser.name}!
      </h1>

      <BalanceOverview balances={balances} />

      <QuickActions actions={quickActions} />

      <ProfileSummary user={dashboardUser} />

      <section className="hidden lg:block">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1c1b1b]">
            Recent Activity
          </h2>
          <Link
            href="/dashboard/recent-activity"
            className="text-sm font-bold text-[#006b5c] transition hover:text-[#00493c]"
          >
            See all
          </Link>
        </div>
        <RecentActivity showSeeAll={false} limit={5} />
      </section>
    </div>
  );
}
