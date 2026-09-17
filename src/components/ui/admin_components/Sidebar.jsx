import { LogOut } from 'lucide-react';
import Link from 'next/link';

import VoyaLogo from '../../brand/VoyaLogo';

export default function Sidebar({ dashboard, system, data }) {
  return (
    <aside className="flex min-h-[769px] w-[80px] md:w-[280px] flex-col justify-between rounded-tr-[30px] rounded-br-[30px] bg-gradient-to-b from-[#004A3F] to-[#01705F] p-4 md:p-6 text-white transition-all duration-300">
      {/* Top description */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center pt-5">
          <VoyaLogo className="w-5 h-5 md:w-9 md:h-9" />
        </div>
        <div className="hidden lg:flex flex-col ">
          <p className="font-montserrat font-semibold text-lg leading-6.6 text-[#00C2A8]">
            Voya Admin
          </p>
          <span className="text-xs font-montserrat font-semibold leading-2 text-[#C9C6C5B2]">
            Fintech Operations
          </span>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col gap-6 mt-2 max-w-[279px]">
        {/* Render Dashboard Items */}
        <nav className="flex flex-col gap-2 mb-2 max-w-[226px]">
          <p className="font-montserrat pb-3 font-semibold text-[7px] sm:text-[11px] leading-[1.1px] uppercase text-[#C9C6C566]">
            Dashboard
          </p>
          {dashboard.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={`flex h-[36px] w-full items-center gap-4 px-4 text-sm rounded-r-[16px] font-bold transition ${
                  item.active
                    ? "bg-[#DDE4E11A]  text-[#00C2A8] border-l-3 border-l-[#00C2A8] "
                    : "text-[#FCF8F8] hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        {/* Render System Items */}
        <nav className="flex flex-col gap-2 border-b border-white/10 max-w-[226px]">
          <p className="font-montserrat pb-3 font-semibold text-[11px] leading-[1.1px] uppercase text-[#C9C6C566]">
            System
          </p>

          {system.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={`flex h-[36px] w-full items-center gap-4 px-4 text-sm rounded-r-[16px] font-bold transition ${
                  item.active
                    ? "bg-[#DDE4E11A]  text-[#00C2A8] border-l-3 border-l-[#00C2A8] "
                    : "text-[#FCF8F8] hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="hidden w-[231px] h-[56px] lg:flex items-center bg-[#FFFFFF1A] gap-3 my-3 px-4 pb-5 pt-5 rounded-[15px]">
        <div className="h-7 w-7 overflow-hidden rounded-full bg-white/20">
          <img
            src={data?.profile_image || "/default-avatar.png"}
            alt="profile picture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-xs font-semibold leading-[12px] text-[#00C2A8]">
            {data?.name || "Admin User"}
          </span>
          <span className="text-[10px] text-[#C9C6C599] font-montserrat regular leading-[15px]">
            {data?.role || "Admin"}
          </span>
        </div>
      </div>

      {/* Logout Button */}
      <button className="flex justify-center gap-1 text-center items-center w-fit  rounded-sm bg-[#00C2A8] hover:bg-(--color-brand-accent) hover:text-white/40 coursor-pointer text-black/79 font-semibold px-4 py-2">
        <LogOut className="h-5 w-5" />
        <span className="hidden md:inline">Log Out</span>
      </button>
    </aside>
  );
}
