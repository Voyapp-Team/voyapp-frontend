import React from 'react';

import {
  ArrowRight,
  EqualApproximately,
  EyeOff,
} from 'lucide-react';

import Button from '@/src/components/ui/Button';
import { EyeOpenIcon } from '@/src/components/ui/Icons';

const cardClasses =
  "w-full rounded-3xl text-white " +
  "border-transparent bg-[linear-gradient(180deg,var(--color-brand-primary-deep)_0%,var(--color-brand-accent)_100%)] " +
  "shadow-[0_4px_6px_rgba(0,107,92,0.1),0_10px_15px_rgba(0,107,92,0.1)]";

export default function CrewBalanceOverview({
  className = "",
  usdBalance,
  ngnBalance,
  loading,
  toggleBalance,
  viewBalance,
  percent_share,
  earned,
  onClick,
}) {
  return (
    <div
      className={`${cardClasses} ${className ? className : `flex flex-col gap-4 items-start w-[608px] h-[340px] sm:h-[306px] p-8`}`.trim()}
    >
      <div className="max-w-50 flex flex-col gap-4">
        <p className="font-manrope font-medium text-base leading-5 text-[#FFFFFF]/70">
          CREW BALANCE
        </p>
        <div
          className="flex justify-between items-center gap-4 h-[
48px] mb-2"
        >
          <p className="font-montserrat font-extrabold text-5xl  text-[#FFFFFF] leading-12 tracking-tight">
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
      <div className="flex items-center gap-2 h-[24px] font-montserrat font-bold text-xl leading-6 text-[#FFFFFF]">
        <EqualApproximately className="w-5 h-5 text-white" />₦
        {viewBalance ? (loading ? "0.00" : ngnBalance) : " ••••"}
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-between gap-3 items-center w-full">
        {/* dashboard owner share display */}
        <div className="p-4 max-h-[84px] max-w-fit bg-[#ffffff]/10 backdrop:blur-md border border-[#FFFFFF]/24 rounded-xl">
          <p className="font-manrope font-semibold text-xs leading-4">
            YOUR SHARE ({percent_share}%)
          </p>
          <span className="font-plusjakartasans font-bold text-2xl leading-8 text-[#FFFFFF] whitespace-nowrap">
            {viewBalance ? earned : " ••••"}
          </span>
        </div>
        {/* Button to withdraw shares */}
        <div className="w-full sm:w-1/2">
          {" "}
          <Button
            variant="secondary"
            onClick={onClick}
            endIcon={<ArrowRight className="w-4 h-4 text-" />}
            className="flex items-center gap-2 max-h-[52px] w-full whitespace-nowrap"
          >
            Withdraw My Share{" "}
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
