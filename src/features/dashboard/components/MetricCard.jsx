"use client";

import { useState } from "react";
import Link from "next/link";
import BalanceVisibilityToggle from "@/src/components/ui/BalanceVisibilityToggle";
import { EyeOpenIcon } from "@/src/components/ui/Icons";

import { HeroWalletIcon } from "./DashboardIcons";

const actionStyles = {
  solid:
    "inline-flex min-h-[42px] items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#006b5c] transition hover:bg-[#f3fbf9] lg:min-h-[60px]",
  ghost:
    "inline-flex min-h-[42px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-bold text-white transition hover:bg-white/20 lg:min-h-[60px]",
};

export default function MetricCard({ metric }) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#006b5c_0%,#00c2a8_100%)] px-4 py-4 text-white shadow-[0_18px_32px_rgba(0,107,92,0.14)] lg:px-6 lg:py-6">
      <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#00c2a8]/45 blur-2xl" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#00c2a8]/30 blur-2xl" />
      <HeroWalletIcon className="absolute right-9 top-9 hidden h-10 w-10 text-white lg:block" />

      <div className="relative flex min-h-[105px] flex-col justify-between gap-3 lg:min-h-[145px] lg:gap-3">
        <div>
          <div>
            <p className="text-sm font-semibold text-white/80">{metric.label}</p>
            <div className="mt-3 flex items-center gap-4 lg:mt-2 lg:gap-6">
              <p className="text-[30px] font-bold leading-none tracking-normal lg:text-[34px]">
                {isHidden ? "••••••" : metric.value}
              </p>
              <BalanceVisibilityToggle
                isHidden={isHidden}
                onToggle={() => setIsHidden((prev) => !prev)}
              />
            </div>
            <p className="mt-1 text-sm font-medium text-white/75 lg:mt-2">
              {isHidden ? "••••••••" : metric.detail}
            </p>
          </div>
        </div>

        {metric.actions ? (
          <div className="grid grid-cols-[120px_130px] gap-3 lg:grid-cols-[260px_280px] lg:gap-3">
            {metric.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={actionStyles[action.variant || "solid"]}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
