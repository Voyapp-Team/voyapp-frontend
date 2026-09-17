"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { DetailsCard, DetailsHeader } from "../common/DetailsCard";
import {
  ArrowRightIcon,
  ComputersIcon,
  DownloadIcon,
  ShieldCheckedIcon,
} from "../common/SettingIcons";

const paymentOptions = [
  {
    icon: ShieldCheckedIcon,
    label: "KYC Verification",
  },
  {
    icon: ComputersIcon,
    label: "Active Sessions",
  },
  {
    icon: DownloadIcon,
    label: "Download My Data",
  },
];

export default function SecurityCard() {
  const router = useRouter();
  const [currentTier, setCurrentTier] = useState(1);

  const handleClick = (index) => {
    if (index === 0) {
      router.push(`/settings/tier-${currentTier}`);
    } else {
      router.push("/settings/crypto-wallets");
    }
  };

  return (
    <DetailsCard>
      <DetailsHeader>Security</DetailsHeader>
      <section className="flex flex-col gap-2">
        {paymentOptions.map((item, index) => {
          const Icon = item.icon;

          const isMiddleItem = index === 1;

          return (
            <div
              key={index}
              className="flex justify-between items-center gap-3 p-[16px] rounded-[16px] hover:bg-gray-50 transition-all cursor-pointer"
            >
              <div className="flex gap-[16px] items-center">
                <Icon className="w-4 h-4" fill="#006B5C" />
                <p className="font-manrope font-semibold text-[#1C1B1B] text-sm leading-[22.5px]">
                  {item.label}
                </p>
              </div>

              {index === 0 && (
                <div
                  onClick={() => handleClick(index)}
                  className="py-1 px-3 bg-[#006B5C1A] rounded-[2px] font-manrope font-extrabold text-xs text-[#006B5C] "
                >
                  <p>Tier {currentTier}</p>
                </div>
              )}

              {isMiddleItem && (
                <button
                  onClick={() => handleClick(index)}
                  className="flex justify-center w-[27px] h-[22px] rounded-[20px] py-2 px-4 gap-[10px] hover:border hover:boerder-[#1C1B1B] items-center"
                >
                  <ArrowRightIcon className="w-3 h-3 shrink-0" />
                </button>
              )}

              {index === 2 && (
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer `}
                >
                  <p className="font-manrope font-bold text-xs leading-4 text-[#3C4A4699]">
                    Export
                  </p>
                </button>
              )}
            </div>
          );
        })}
      </section>
    </DetailsCard>
  );
}
