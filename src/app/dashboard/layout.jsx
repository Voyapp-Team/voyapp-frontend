import MobileNav from '@/src/components/ui/MobileNav';
import Sidebar from '@/src/components/ui/Sidebar';
import Topbar from '@/src/components/ui/TopBar';
import { sidebarItems } from '@/src/features/dashboard/data/dashboardData';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f8f8] pb-32 pt-[78px] font-manrope text-[#1c1b1b] lg:pb-12">
      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-[1280px] gap-0 px-[17px] py-[42px] lg:px-0 lg:pb-[94px] lg:pt-[28px]">
        {/* Top Navigation */}
        <Sidebar items={sidebarItems} />

        {/* Current Page */}
        <main className="flex-1 py-6">{children}</main>
      </div>
      <MobileNav items={sidebarItems} />
    </div>
  );
}
