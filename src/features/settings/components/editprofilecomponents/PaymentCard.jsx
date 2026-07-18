"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  DetailsCard,
  DetailsHeader,
} from '../common/DetailsCard';
import {
  ArrowRightIcon,
  BankIcon,
  NotificationBellIcon,
  SpeakerIcon,
  TokenIcon,
  WalletIcon,
} from '../common/SettingIcons';

const paymentOptions = [
  {
    icon: BankIcon,
    label: "Saved Bank Accounts",
  },
  {
    icon: WalletIcon,
    label: "Saved Crypto Wallets",
  },
  {
    icon: TokenIcon,
    label: "Default Receive Token",
  },
  {
    icon: NotificationBellIcon,
    label: "Payment Notifications",
  },
  {
    icon: SpeakerIcon,
    label: "Payment Sound",
  },
];

export default function PaymentCard({ onClick }) {
  const router = useRouter();
  // manage the toggle switches for indices 3 and 4
  const [toggles, setToggles] = useState({
    3: false, // NotificationBellIcon
    4: false, // SpeakerIcon
  });

  const handleToggle = (index) => {
    setToggles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleClick = (index) => {
    if (index === 0) {
      router.push("/settings/bank-accounts");
    } else {
      router.push("/settings/crypto-wallets");
    }
  };

  return (
    <DetailsCard>
      <DetailsHeader>Payments</DetailsHeader>
      <section className="flex flex-col gap-2">
        {paymentOptions.map((item, index) => {
          const Icon = item.icon;

          const isMiddleItem = index === 2;

          return (
            <div
              key={index}
              className="flex justify-between items-center gap-3 p-[16px] rounded-[16px] hover:bg-gray-50 transition-all cursor-pointer"
            >
              <div className="flex gap-[16px] items-center">
                <Icon className="w-4 h-4" />
                <p className="font-manrope font-semibold text-[#1C1B1B] text-sm leading-[22.5px]">
                  {item.label}
                </p>
              </div>

              {index < 2 && (
                <button
                  onClick={() => handleClick(index)}
                  className="flex justify-center w-[27px] h-[22px] rounded-[20px] py-2 px-4 gap-[10px] hover:border hover:boerder-[#1C1B1B] items-center"
                >
                  <ArrowRightIcon className="w-3 h-3 shrink-0" />
                </button>
              )}

              {isMiddleItem && (
                <select
                  name="select_token"
                  id="selectToken"
                  className="w-[70px] h-[32px] rounded-lg bg-white px-2 text-xs font-semibold text-[#1C1B1B] outline-none cursor-pointer"
                >
                  <option value="USDC">USDC</option>
                  <option value="CELO">CELO</option>
                  <option value="BTC">BTC</option>
                </select>
              )}

              {index > 2 && (
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 outline-none ${
                    toggles[index] ? "bg-[#006B5C]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      toggles[index] ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              )}
            </div>
          );
        })}
      </section>
    </DetailsCard>
  );
}
