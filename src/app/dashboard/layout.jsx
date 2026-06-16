"use client";

import { usePathname } from "next/navigation";
import MobileNav from '@/src/components/ui/MobileNav';
import Sidebar from '@/src/components/ui/Sidebar';
import Topbar from '@/src/components/ui/TopBar';
import { sidebarItems } from '@/src/features/dashboard/data/dashboardData';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const hideSidebar = pathname === "/dashboard/recurring-payment" || pathname === "/dashboard/recurring-payment/";

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-manrope text-[#1c1b1b] px-5 pb-[112px] pt-[86px] lg:px-10 lg:pb-8">
      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-[1024px] gap-5 lg:gap-6">
        {!hideSidebar && <Sidebar items={sidebarItems} />}

        {/* Current Page */}
        <main className="w-full flex-1">{children}</main>
      </div>
      <MobileNav items={sidebarItems} />
    </div>
  );
}
