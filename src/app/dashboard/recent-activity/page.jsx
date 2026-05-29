import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { VoyaMark } from "@/src/components/brand/VoyaLogo";
import RecentActivity from "../../../features/dashboard/components/RecentActivity";

export default function DashboardRecentActivityPage() {
  return (
  
    <div className="mx-auto w-full max-w-[1280px] px-5 pt-[43px] sm:px-8 lg:px-0">
      <h1 className="mb-[23px] text-2xl font-extrabold text-[#1c1b1b] lg:ml-[41px]">
        Recent Activity
      </h1>
      <RecentActivity showSeeAll={false} />
    </div>
    
  );
}
