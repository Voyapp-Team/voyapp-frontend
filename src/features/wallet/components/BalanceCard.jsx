import React from 'react';

import {
  EqualApproximately,
  EyeOff,
} from 'lucide-react';

import { EyeOpenIcon } from '@/src/components/ui/Icons';

import CopyAddressButton from './CopyWalletAddressButton';

const cardClasses =
  "w-full rounded-2xl px-6 pt-7 text-white " +
  "border-transparent bg-[linear-gradient(180deg,var(--color-brand-primary-deep)_0%,var(--color-brand-accent)_100%)] " +
  "shadow-[0_4px_6px_rgba(0,107,92,0.1),0_10px_15px_rgba(0,107,92,0.1)]";

export default function WalletBalanceCard({
  className = "",
  usdBalance,
  ngnBalance,
  loading,
  toggleBalance,
  viewBalance,
  walletAddress,
}) {
  return (
    <div
      className={`${cardClasses} ${className ? className : `flex flex-col gap-4 items-start w-[584px] h-[241px] `}`.trim()}
    >
      <div className="max-w-50 flex flex-col gap-4">
        <p className="font-montserrat font-medium text-base leading-5 text-[#FFFFFF]/70">
          Your Balance
        </p>
        <div
          className="flex justify-between items-center gap-4 h-[
48px] mb-2"
        >
          <p className="font-montserrat font-extrabold text-base sm:text-5xl  text-[#FFFFFF] leading-12 tracking-tight">
            {viewBalance ? (loading ? "0.00" : usdBalance) : "••••"}
          </p>
          {/* Toggle between EyeOpen and EyeOff icon */}
          <button onClick={toggleBalance} className="w-7 h-7">
            {viewBalance ? (
              <EyeOpenIcon className="w-9 h-9" />
            ) : (
              <EyeOff className="w-9 h-9" />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 h-[24px] font-montserrat font-bold text-base sm:text-xl leading-6 text-[#FFFFFF]">
        <EqualApproximately className="w-5 h-5 text-white" />₦
        {viewBalance ? (loading ? "0.00" : ngnBalance) : " ••••"}
      </div>
      <CopyAddressButton address={walletAddress} />
    </div>
  );
}
