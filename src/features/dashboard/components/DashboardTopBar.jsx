import { NotificationIcon, SettingIcon } from "@/src/components/ui/Icons";
import { VoyaMark } from "@/src/components/brand/VoyaLogo";
import { SearchIcon } from "./DashboardIcons";

export default function DashboardTopBar({ user }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#8e8e8e]/20 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <VoyaMark className="h-9 w-16" />
          <div>
            <p className="text-sm font-semibold text-[#6c7a76]">Hello,</p>
            <h1 className="text-xl font-extrabold text-[#1c1b1b]">
              {user.name}
            </h1>
          </div>
        </div>

        <label className="hidden min-h-12 w-full max-w-sm items-center gap-3 rounded-full border border-[#e1e1e1] bg-[#fcf8f8] px-4 lg:flex">
          <SearchIcon className="h-4 w-4 text-[#6c7a76]" />
          <span className="sr-only">Search dashboard</span>
          <input
            type="search"
            placeholder="Search activity"
            className="w-full bg-transparent text-sm font-medium text-[#1c1b1b] outline-none placeholder:text-[#9b9b9b]"
          />
        </label>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f3f2] text-black transition hover:bg-[#ece8e6]"
          >
            <NotificationIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Settings"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f3f2] text-black transition hover:bg-[#ece8e6]"
          >
            <SettingIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
