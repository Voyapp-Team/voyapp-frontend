import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { VoyaMark } from "@/src/components/brand/VoyaLogo";
import RecentActivity from "../../../features/dashboard/components/RecentActivity";

export default function DashboardRecentActivityPage() {
  return (
    <main className="min-h-screen bg-white pb-16 font-manrope text-[#1c1b1b]">
      <header className="h-[78px] border-b border-[#8e8e8e]/20">
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center gap-8 px-7">
          <Link
            href="/dashboard"
            aria-label="Back to dashboard"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#1c1b1b] transition hover:bg-[#f3fbf9]"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <VoyaMark className="h-[34px] w-[77px] lg:h-[38px] lg:w-[97px]" />
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1280px] px-5 pt-[43px] sm:px-8 lg:px-0">
        <h1 className="mb-[23px] text-2xl font-extrabold text-[#1c1b1b] lg:ml-[141px]">
          Recent Activity
        </h1>
        <RecentActivity showSeeAll={false} />
      </div>
    </main>
  );
}
