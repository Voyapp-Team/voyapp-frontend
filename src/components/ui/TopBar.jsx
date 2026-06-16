import { VoyaMark } from "@/src/components/brand/VoyaLogo";
import { NotificationIcon, SettingIcon } from "@/src/components/ui/Icons";

function HeaderButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#1c1b1b] transition hover:bg-[#f6f3f2]"
    >
      {children}
    </button>
  );
}

export default function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#8e8e8e]/20 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[64px] w-full max-w-[1024px] items-center justify-between px-4 lg:px-6">
        <VoyaMark className="h-[28px] w-[62px] lg:h-[32px] lg:w-[72px]" />

        <div className="flex items-center gap-3">
          <HeaderButton label="Notifications">
            <NotificationIcon className="h-[37px] w-[28px]" />
          </HeaderButton>
          <HeaderButton label="Settings">
            <SettingIcon className="h-[35px] w-[33px]" />
          </HeaderButton>
        </div>
      </div>
    </header>
  );
}
