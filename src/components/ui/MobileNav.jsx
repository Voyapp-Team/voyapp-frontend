import Link from "next/link";

export default function MobileDashboardNav({ items }) {
  return (
    <nav className="fixed left-4 right-4 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-50 grid h-20 grid-cols-4 justify-items-center rounded-[30px] border border-[#c8c8c8] bg-white p-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur-lg lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex h-[59px] w-[67px] flex-col items-center justify-center gap-1 rounded-[10px] bg-[#fbfbfb] text-[11px] font-extrabold transition ${
              item.active
                ? "text-[#006b5c]"
                : "text-[#727272]"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
