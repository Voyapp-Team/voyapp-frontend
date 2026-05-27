import Link from "next/link";

import DashboardTopBar from "../components/DashboardTopBar";
import DashboardSidebar from "../components/DashboardSidebar";
import BalanceOverview from "../components/BalanceOverview";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";
import ProfileSummary from "../components/ProfileSummary";
import MobileDashboardNav from "../components/MobileDashboardNav";
import {
  balances,
  dashboardUser,
  quickActions,
  sidebarItems,
} from "../data/dashboardData";

export default function DashboardScreen() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] pb-32 pt-[78px] font-manrope text-[#1c1b1b] lg:pb-12">
      <DashboardTopBar />

      <div className="mx-auto flex w-full max-w-[1280px] gap-0 px-[17px] py-[42px] lg:px-0 lg:pb-[94px] lg:pt-[28px]">
        <DashboardSidebar items={sidebarItems} />

        <div className="min-w-0 flex-1 lg:max-w-[1014px]">
          <h1 className="hidden text-2xl font-extrabold text-[#006b5c] lg:mb-[32px] lg:block">
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
      </div>

      <MobileDashboardNav items={sidebarItems} />
    </main>
  );
}
