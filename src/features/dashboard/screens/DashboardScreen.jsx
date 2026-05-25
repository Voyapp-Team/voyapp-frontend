import BalanceOverview from "../components/BalanceOverview";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardTopBar from "../components/DashboardTopBar";
import MobileDashboardNav from "../components/MobileDashboardNav";
import ProfileSummary from "../components/ProfileSummary";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";
import {
  activityItems,
  balances,
  dashboardUser,
  quickActions,
  sidebarItems,
} from "../data/dashboardData";

export default function DashboardScreen() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] pb-28 font-manrope text-[#1c1b1b] lg:pb-10">
      <DashboardTopBar user={dashboardUser} />

      <div className="mx-auto flex w-full max-w-7xl gap-6 px-5 py-6 sm:px-8">
        <DashboardSidebar items={sidebarItems} />

        <div className="min-w-0 flex-1 space-y-5">
          <section className="rounded-[24px] bg-[linear-gradient(135deg,#006B5C,#00C2A8)] p-5 text-white shadow-[0_20px_35px_rgba(0,107,92,0.18)] sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Voya dashboard
                </p>
                <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                  Track, convert, and move your money from one calm place.
                </h1>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-3">
                <p className="text-sm font-semibold text-white/70">
                  Monthly inflow
                </p>
                <p className="mt-1 text-2xl font-extrabold">$12,480</p>
              </div>
            </div>
          </section>

          <BalanceOverview balances={balances} />

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-5">
              <QuickActions actions={quickActions} />
              <RecentActivity activities={activityItems} />
            </div>
            <ProfileSummary user={dashboardUser} />
          </div>
        </div>
      </div>

      <MobileDashboardNav items={sidebarItems} />
    </main>
  );
}
