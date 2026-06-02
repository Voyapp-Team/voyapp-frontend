import Topbar from "@/src/components/ui/TopBar";
import Sidebar from "@/src/components/ui/Sidebar";
import MobileNav from "@/src/components/ui/MobileNav";
import { sidebarItems } from "@/src/features/dashboard/data/dashboardData";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-manrope text-[#1c1b1b] py-30 px-6">

      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-[1280px] gap-0 ">

        {/* Top Navigation */}
        <Sidebar items={sidebarItems} />

        {/* Current Page */}
        <main className="w-full flex-1">
          {children}
        </main>

      </div>
      <MobileNav items={sidebarItems} />
    </div>
  );
}