import Link from 'next/link';

export default function QuickLinks({ actions }) {
  return (
    <section
      className="mx-auto grid w-full grid-cols-3 gap-x-[9px] gap-y-[25px] sm:max-w-[754px] sm:gap-x-4 sm:gap-y-[25px]"
      //   id="crew"
    >
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Link
            key={index}
            href={action.href}
            className={` flex flex-col gap-2 items-center rounded-[30px] bg-[#FFFFFF] px-3 py-4 transition sm:px-6 h-[104px]
            `}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#006b5c]  sm:h-14 sm:w-14">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="fonr-manrope text-center text-xs font-semibold uppercase leading-4 text-[#1C1B1B] pb-2">
              {action.label}
            </span>
          </Link>
        );
      })}
    </section>
  );
}
