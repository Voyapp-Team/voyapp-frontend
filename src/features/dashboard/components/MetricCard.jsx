import Link from "next/link";

import { HeroEyeIcon, HeroWalletIcon } from "./DashboardIcons";

const actionStyles = {
  solid:
    "inline-flex min-h-[47px] items-center justify-center rounded-full bg-white px-7 text-sm font-extrabold text-[#006b5c] transition hover:bg-[#f3fbf9] lg:min-h-[69px]",
  ghost:
    "inline-flex min-h-[47px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-extrabold text-white transition hover:bg-white/20 lg:min-h-[69px]",
};

export default function MetricCard({ metric }) {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#006b5c_0%,#00c2a8_100%)] px-[26px] py-6 text-white shadow-[0_24px_48px_rgba(0,107,92,0.18)] lg:px-10 lg:pb-[27px] lg:pt-[25px]">
      <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-[#00c2a8]/45 blur-2xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#00c2a8]/30 blur-2xl" />
      <HeroWalletIcon className="absolute right-9 top-9 hidden h-10 w-10 text-white lg:block" />

      <div className="relative flex min-h-[130px] flex-col justify-between gap-5 lg:min-h-[219px] lg:gap-7">
        <div>
          <div>
            <p className="text-sm font-bold text-white/80">{metric.label}</p>
            <div className="mt-3 flex items-center gap-6 lg:mt-2 lg:gap-[62px]">
              <p className="text-[42px] font-extrabold leading-none tracking-normal lg:text-[48px]">
                {metric.value}
              </p>
              <button
                type="button"
                aria-label="Show balance"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <HeroEyeIcon className="h-8 w-8" />
              </button>
            </div>
            <p className="mt-2 text-sm font-semibold text-white/70 lg:mt-4">
              {metric.detail}
            </p>
          </div>
        </div>

        {metric.actions ? (
          <div className="grid grid-cols-[153px_158px] justify-center gap-4 lg:grid-cols-[426px_439px] lg:gap-[41px]">
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
