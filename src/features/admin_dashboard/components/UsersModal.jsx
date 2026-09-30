"use client";
import { ArrowRightSquare, BanknoteIcon, XIcon } from "lucide-react";

import { UsersInformation } from "../data/dashboardData";
import { CameraIcon } from "./DashboardIcons";

const recentActivity = [
  {
    icon: BanknoteIcon,
    title: "Payment Received",
    description: "+$4,200,000 from Upwork Global Inc.",
    time: "2 hours ago",
  },
  {
    icon: ArrowRightSquare,
    title: "Login from New Device",
    description: "MacBook Pro, Stockholm (IP.192.168.1.45)",
    time: "Today, 09:12 AM",
  },
];

export const UsersModal = ({ userId, close }) => {
  if (!userId) return;

  const activeUser = UsersInformation.find((user) => user.id === userId);
  const profileImage =
    activeUser.profile_image || activeUser.profile_picture || "";
  const fullName = activeUser.first_name + " " + activeUser.last_name;

  // const kycScore =
  //   activeUser.kyc_tier.toLowerCase() === "tier-1"
  //     ? 30
  //     : activeUser.kyc_tier.toLowerCase() === "tier-2"
  //       ? 60
  //       : 90;

  // const OperationalScore =
  //   (Number(activeUser.transactions_count) / Number(kycScore)) * 100;
  // console.log(kycScore);

  return (
    <div className="relative flex flex-col items-center h-fit w-full bg-white rounded-2xl">
      <header className="max-h-[79px] w-full border-b border-b-[#BBCAC4] flex justify-between p-4 items-center gap-4">
        <p className="font-montserrat font-semibold text-lg leading-6.4 text-[#161D1B] min-w-[200px]">
          User Details
        </p>

        <span>
          <XIcon onClick={close} className="h-5 w-5 text-[#161D1B]" />
        </span>
      </header>
      <section className="top-[608px] w-full border-t border-t-[#BBCAC4] p-6 flex flex-col items-center gap-4">
        {/* user names role and profile picture section */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[96px] h-[96px] rounded-full border-4 border-[#00C2A833] bg-[#E8F0EC]">
            <img
              src={profileImage}
              alt="profile Picture"
              className="object-contain h-full w-full rounded-full"
            />
            <CameraIcon className="absolute bottom-0 -right-0 w-5.5 h-5.5" />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[#161D1B] font-montserrat font-semibold textlg leading-6 text-center">
              {fullName}
            </p>
            <p className="font-montserrat font-medium text-sm text-[#3C4A46] leading-5 text-center">
              {activeUser.account_type}
            </p>
            <div className="flex gap-4 p-4">
              <button className="bg-[#00C2A81A] w-[106px] h-[28px] rounded-lg py-2 px-6 text-[#00C2A8] font-montserrat font-semibold text-xs leading-3 text-center cursor-pointer">
                Message
              </button>
              <button className="bg-[#FFDAD61A] w-[106px] h-[28px] rounded-lg py-2 px-6 text-[#BA1A1A] font-montserrat font-semibold text-xs leading-3 text-center cursor-pointer">
                Suspend
              </button>
            </div>
          </div>
        </div>
        {/* operational risk score */}
        <div className="flex flex-col gap-3 bg-[#EEF5F2] border border-[#BBCAC44D] rounded max-w-[351px] h-[174px] p-6">
          <p className="font-montserrat font-semibold text-xs leading-3 text-[#3C4A46]">
            Operational Risk Score
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-[96px] h-[96px] flex items-center">
              <div className="flex items-center justify-center w-[80] h-[80] rounded-full text-center border-8 border-[#00C2A8] font-montserrat font-semibold text-lg leading-6">
                {/* {OperationalScore} */}
                79
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-[#161D1B] font-montserrat font-semibold text-xs leading-3 w-full">
                Low Risk
              </strong>
              <p className="text-[#3C4A46] font-montserrat font-regular text-xxs leading-4">
                Score is based on {activeUser.transactions_count} transactions
                and consistent KYC verification since 2023
              </p>
            </div>
          </div>
        </div>
        {/* recet activity */}
        <div classsName="flex flex-col items-center gap-3 mt-3">
          <p className="text-[#3C4A46] font-montserrat font-semibold text-xs leading-3 uppercase">
            RECENT ACTIVITY
          </p>
          <div className="flex flex-col gap-2 items-center mt-3">
            {recentActivity.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 w-full">
                  <div
                    className={` w-8.5 h-8.5 rounded-full ${index === 0 ? "text-[#006B5C] bg-[#00C2A81A]" : "bg-[#E5E2E11A] text-[#5F5E5E]"}`}
                  >
                    <Icon className="w-7 h-7 pl-1.5 pt-1.5 flex justify-center" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-montserrat font-semibold text-base leading-3  text-[#161D1B]">
                      {item.title}
                    </p>
                    <p classNmae="font-montserrat font-regular text-[11px] leading-3 text-[#3C4A46]">
                      {item.description}
                    </p>
                    <span className="font-montserrat font-regular text-[10px] leading-4 text-[#6C7A76]">
                      {item.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* action button */}
      <button className="sticky bottom-3 bg-[#006B5C] w-full max-w-[351px] rounded-md py-4 text-[#FFFFFF] font-montserrat font-semibold text-xs leading-3 cursor-pointer">
        View Full Operational Profile
      </button>
    </div>
  );
};
