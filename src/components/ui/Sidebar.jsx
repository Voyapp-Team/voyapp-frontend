import Link from "next/link";

export default function Sidebar({ items }) {
  return (
    <aside className="hidden w-[100px] shrink-0 lg:mt-[50px] lg:block">
      <nav className="ml-[22px] flex h-[250px] w-[40px] flex-col items-center justify-center gap-[16px] rounded-[22px] border border-[#e1e1e1] bg-white/40">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              className={`flex h-[46px] w-[36px] flex-col items-center justify-center gap-1 rounded-[16px] text-[10px] font-bold transition ${
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
