"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  DetailsCard,
  DetailsHeader,
} from '../common/DetailsCard';
import {
  AlertIcon,
  GravelIcon,
  ShiedlSearchIcon,
} from '../common/SettingIcons';

const paymentOptions = [
  {
    icon: GravelIcon,
    label: "Terms of Service",
  },
  {
    icon: ShiedlSearchIcon,
    label: "Privacy Policy",
  },
  {
    icon: AlertIcon,
    label: "About Voya",
  },
];

export default function LegalSupport() {
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const handleClick = (index) => {
    if (index === 2) {
      setModal(true);
    } else {
      router.push("/settings/crypto-wallets");
    }
  };

  return (
    <>
      <DetailsCard className={`bg-[#FCF8F8]`}>
        <DetailsHeader>Legal</DetailsHeader>
        <section className="flex flex-col gap-2">
          {paymentOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex justify-between items-center gap-3 p-[16px] rounded-[16px] hover:bg-gray-50 transition-all cursor-pointer"
              >
                <div
                  className="flex gap-[16px] items-center"
                  onClick={() => handleClick(index)}
                >
                  <Icon className="w-4 h-4" fill="#006B5C" />
                  <p
                    className={`font-manrope font-semibold  text-sm leading-[22.5px] text-[#1C1B1B]`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </DetailsCard>
    </>
  );
}
