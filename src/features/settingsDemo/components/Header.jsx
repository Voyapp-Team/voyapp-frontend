import { NotificationIcon } from "@/src/components/ui/Icons";
import Link from "next/link";



export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#8e8e8e]/20 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-[64px] w-full max-w-[1024px] items-center justify-between px-4 lg:px-6">
          <Link href="/settings" label="Settings">
            <img className="" src="/header-back-icon.svg" />
          </Link>
          <Link href="/notifications" label="Notifications">
            <NotificationIcon className="h-[37px] w-[28px]" fill ="#000000" />
          </Link>
        </nav>
    </header>
  );
}  