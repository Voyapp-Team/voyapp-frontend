"use client";

import { Plus } from 'lucide-react';

import {
  NotificationIcon,
  SearchIcon,
} from '@/src/components/ui/Icons';

function HeaderButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#1c1b1b] transition hover:bg-[#f6f3f2] cursor-pointer"
    >
      {children}
    </button>
  );
}

export default function TopBar({ data }) {
  return (
    <header className="flex w-full items-center justify-between border-b border-[#8e8e8e]/20 bg-white/90 py-3 backdrop-blur lg:py-4 ">
      <div className="flex items-center justify-between w-full max-w-[1024px] mx-auto px-4 lg:px-6">
        <div className="w-full">
          <div className="relative flex items-center max-w-[384px] h-[36px] border border-[#E1E1E1] rounded-2xl p-2">
            <SearchIcon className="w-4 h-4 absolute top-2 left-3" />
            <input
              type="text"
              placeholder="Search TxID, User, or Token.."
              className="font-monsterrat font-medium text-sm leading-[100%] bg-[#FFFFFF] text-[#6B7280]  w-full  pl-6 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-fit pl-4 whitespace-nowrap">
          <button className="hidden lg:flex gap-2 items-center rounded-lg bg-[#006B5C] text-white w-fit py-2 px-4 whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Quick Actions
          </button>
          <HeaderButton label="Notifications">
            <NotificationIcon className="h-[20px] w-[16px]" />
          </HeaderButton>

          <div className="hidden sm:flex gap-2 items-center border-l border-l-[#BBCAC4] pl-4 h-[40px] md:ml-6">
            <div className="flex flex-col text-right ">
              <span className="font-montserrat text-sm font-bold leading-5 text-[#161D1B]">
                {data?.name || "Admin User"}
              </span>
              <span className="text-[11px] text-[#5F5E5E] font-montserrat font-semibold leading-[15px]">
                {data?.role || "Admin"}
              </span>
            </div>
            <div className="h-7 w-7 overflow-hidden rounded-full bg-white/20 border border[#00C2A8]">
              <img
                src={data?.profile_image || "/default-avatar.png"}
                alt="profile picture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
