import DashboardCard from "./DashboardCard";

const statusClasses = {
  Completed: "bg-[#eafff8] text-[var(--color-brand-primary-deep)]",
  Processing: "bg-[#fff8e6] text-[#8a5b00]",
  Saved: "bg-[#f0f4ff] text-[#31529b]",
};

export default function RecentActivity({ activities }) {
  return (
    <DashboardCard className="p-5" id="activity">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-[#1c1b1b]">
            Recent activity
          </h2>
          <p className="mt-1 text-sm font-medium text-[#6c7a76]">
            Your latest balance movements.
          </p>
        </div>
        <button
          type="button"
          className="rounded-full px-4 py-2 text-sm font-bold text-[var(--color-brand-primary-deep)] transition hover:bg-[var(--color-brand-soft)]"
        >
          See all
        </button>
      </div>

      <div className="mt-5 divide-y divide-[#e9e3e1]">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <article
              key={activity.id}
              className="flex min-h-20 items-center gap-4 py-4"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#65fade]/20 text-[var(--color-brand-primary-deep)]">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-extrabold text-[#1c1b1b]">
                  {activity.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#727272]">
                  {activity.meta}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-extrabold text-[#1c1b1b]">
                  {activity.amount}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusClasses[activity.status] || statusClasses.Completed}`}
                >
                  {activity.status}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </DashboardCard>
  );
}
