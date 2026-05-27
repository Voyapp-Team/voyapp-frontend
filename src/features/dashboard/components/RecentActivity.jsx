import Link from "next/link";

import { activityItems } from "../data/dashboardData";

const statusStyles = {
  credit: "bg-[#e8f8f4] text-[#006b5c]",
  swap: "bg-[#fff3eb] text-[#8f3f20]",
  debit: "bg-[#fff3eb] text-[#8f3f20]",
  safe: "bg-[#e8f8f4] text-[#006b5c]",
};

const iconToneStyles = {
  credit: "bg-[#e8f8f4] text-[#006b5c]",
  swap: "bg-[#fff3eb] text-[#9d4224]",
  debit: "bg-[#fff3eb] text-[#9d4224]",
  safe: "bg-[#e8f8f4] text-[#006b5c]",
};

export default function RecentActivity({ showSeeAll = true, limit }) {
  const items = showSeeAll
    ? activityItems.slice(0, 3)
    : activityItems.slice(0, limit ?? activityItems.length);
  const latest = activityItems[0];
  const LatestIcon = latest.icon;

  if (showSeeAll) {
    return (
      <section
        className="mx-2 min-h-[155px] rounded-[23px] border-2 border-[#60d5c6] bg-white px-5 py-5 shadow-sm lg:mx-1 lg:min-h-[151px] lg:rounded-[21px] lg:border-[6px] lg:px-8 lg:py-6"
        id="activity"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-extrabold text-[#1c1b1b]">
              Recent Activity
            </p>
            <p className="mt-1 text-sm font-semibold text-[#727272]">
              Track your money moves
            </p>
          </div>

          <Link
            href="/dashboard/recent-activity"
            className="shrink-0 text-sm font-extrabold text-[#006b5c] transition hover:text-[#00493c]"
          >
            See all
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#dff4ef] pt-4 lg:mt-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                iconToneStyles[latest.tone] ?? iconToneStyles.credit
              }`}
            >
              <LatestIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-[#1c1b1b] sm:text-base">
                {latest.title}
              </p>
              <p className="mt-1 text-xs font-semibold text-[#727272] sm:text-sm">
                {latest.meta}
              </p>
            </div>
          </div>

          <p className="shrink-0 text-sm font-extrabold text-[#006b5c] sm:text-base">
            {latest.amount}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[998px]" id="activity">
      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="grid min-h-20 grid-cols-[auto_1fr] gap-4 rounded-[16px] bg-white px-4 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  iconToneStyles[item.tone] ?? iconToneStyles.credit
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold text-[#1c1b1b] sm:text-base">
                  {item.title}
                </p>
                <p className="mt-1 text-xs font-semibold text-[#727272] sm:text-sm">
                  {item.meta}
                </p>
              </div>

              <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-1 sm:justify-end">
                <p
                  className={`text-sm font-extrabold ${
                    item.tone === "credit" ? "text-[#006b5c]" : "text-[#3f4a47]"
                  }`}
                >
                  {item.amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
