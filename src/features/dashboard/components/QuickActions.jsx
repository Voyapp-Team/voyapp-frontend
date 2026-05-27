import Link from "next/link";

export default function QuickActions({ actions }) {
  return (
    <section
      className="mx-auto grid w-full grid-cols-3 gap-x-[9px] gap-y-[25px] sm:max-w-[754px] sm:gap-x-4 sm:gap-y-[25px]"
      id="crew"
    >
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            href={action.href}
            className={`group flex items-center rounded-[30px] border border-[#006b5c] bg-[#f8f8f8] px-3 transition hover:bg-white sm:px-6 ${
              action.featured
                ? "col-span-3 mx-auto min-h-[81px] w-[311px] sm:min-h-[104px] sm:w-full"
                : "min-h-[76px] sm:min-h-[104px]"
            }`}
          >
            <div
              className={`flex items-center ${
                action.featured
                  ? "ml-[39px] gap-5 sm:ml-[31px] sm:gap-6"
                  : "mx-auto flex-col gap-2"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f6f3f2] text-[#006b5c] group-hover:bg-[#e6f8f4] sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span className="text-center text-[11px] font-extrabold uppercase leading-tight text-[#006b5c] sm:text-base">
                {action.label}
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
