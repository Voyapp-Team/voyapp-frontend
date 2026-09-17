"use client";

import Sidebar from '@/src/components/ui/admin_components/Sidebar';
import Topbar from '@/src/components/ui/admin_components/TopBar';
import {
  dashboardItems,
  dashboardUser,
  systemItems,
} from '@/src/features/admin_dashboard/data/dashboardData';

export default function AdminDashboardLayout({ children }) {
  const hideTopBar =
    pathname === "/dashboard/profile" || pathname === "/dashboard/profile/edit";

  return (
    <div className="flex min-h-screen bg-[#f8f8f8] font-manrope text-[#1c1b1b] pb-[112px] lg:pb-8">
      {/* Sidebar */}
      <Sidebar
        dashboard={dashboardItems}
        system={systemItems}
        data={dashboardUser}
      />

      {/* Main Content Area */}
      <div className="mx-auto flex flex-1 w-full flex-col gap-5 lg:gap-6 ">
        {/* Topbar  */}
        {!hideTopBar && <Topbar data={dashboardUser} />}

        {/* Current Page */}
        <main className="w-full flex-1 px-2 sm:px-5">{children}</main>
      </div>
    </div>
  );
}
