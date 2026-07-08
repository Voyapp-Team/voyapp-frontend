import { NotificationIcon } from "@/src/components/ui/Icons";
import Link from "next/link";



export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#8e8e8e]/20 bg-white/90 backdrop-blur px-6 md:px-12">
      <nav className="mx-auto flex h-16 w-full  items-center justify-between  ">
        <div className="flex items-center gap-14">
          <Link href="/settings" label="Settings">
            <img className="" src="/header-back-icon.svg" />
          </Link>
          <h1 className="text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#115E59]">KYC</h1>
        </div>
        <Link href="/notifications" label="Notifications">
          <NotificationIcon className="h-9.25 w-7" fill ="#000000" />
        </Link>
      </nav>
    </header>
  );
}  