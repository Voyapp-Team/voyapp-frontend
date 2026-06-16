import Link from "next/link";

export default function QuickActions({ actions }) {
  return (
    <section
      className="mx-auto grid w-full grid-cols-3 gap-2 sm:max-w-[754px]"
      id="crew"
    >
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            href={action.href}
            className={`group rounded-[28px] border border-[#006b5c] bg-white/95 p-2 shadow-sm transition duration-200 hover:bg-[#f8f8f8] ${
              action.featured
                ? "col-span-3 sm:p-3"
                : "flex flex-col items-center justify-center gap-2 text-center"
            }`}
          >
            <div
              className={`flex shrink-0 items-center justify-center rounded-2xl bg-[#f6f3f2] text-[#006b5c] ${
                action.featured ? "h-14 w-14" : "h-12 w-12"
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>

            {action.featured ? (
              <div className="min-w-0 md:flex md:items-center md:justify-between md:gap-5">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#006b5c]">
                    {action.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#4b5b56]">
                    {action.description}
                  </p>
                </div>
              </div>
            ) : (
              <span className="text-[11px] font-bold uppercase leading-tight text-[#006b5c] sm:text-sm">
                {action.label}
              </span>
            )}
          </Link>
        );
      })}
    </section>
  );
}
