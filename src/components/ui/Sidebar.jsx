import Link from "next/link";

export default function Sidebar({ items }) {
  return (
    <aside className="hidden w-[133px] shrink-0 lg:mt-[66px] lg:block">
      <nav className="ml-[43px] flex h-[342px] w-[50px] flex-col items-center justify-center gap-[25px] rounded-[25px] border border-[#e1e1e1] bg-white/40">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              className={`flex h-[52px] w-[42px] flex-col items-center justify-center gap-1 rounded-[18px] text-[11px] font-bold transition ${
                item.active
                  ? "bg-[#ecfbf8] text-[#006b5c]"
                  : "text-[#727272] hover:bg-white hover:text-[#006b5c]"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
