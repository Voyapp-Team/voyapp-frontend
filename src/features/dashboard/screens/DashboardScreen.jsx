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
    <div className="min-w-0 flex-1 lg:max-w-[1014px]">
      <h1 className="text-2xl font-extrabold text-[#006b5c] mb-[32px] lg:block">
        Hello, {dashboardUser.name}!
      </h1>

      <BalanceOverview balances={balances} />

      <div className="mt-6">
        <QuickActions actions={quickActions} />
      </div>

      <div className="mt-[49px] lg:mt-[51px]">
        <ProfileSummary user={dashboardUser} />
      </div>

      <section className="hidden lg:block lg:mt-[63px]">
        <div className="mb-[23px] flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-[#1c1b1b]">
            Recent Activity
          </h2>
          <Link
            href="/dashboard/recent-activity"
            className="text-sm font-extrabold text-[#006b5c] transition hover:text-[#00493c]"
          >
            See all
          </Link>
        </div>
        <RecentActivity showSeeAll={false} limit={5} />
      </section>
    </div>
    
  );
}
