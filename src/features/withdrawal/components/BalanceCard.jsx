"use client";

import { BeneficiaryIcon } from "@/src/components/ui/Icons";
import { formattedCurrency } from "../utils/formattedCurrency";

export default function BalanceCard({ balance, onToggleBalanceVisibility, viewBalance }) {
  return (
    <div className=" relative bg-gradient-to-r from-[#006B5C] to-[#00C2A8] w-full max-w-[584px] rounded-[24px] shadow p-6 mb-4">
      <h2 className="text-[14px] font-medium font-manrope leadding-5 text-white">Available to withdraw</h2>
       <div>
            <div className="flex max-w-[324px] justify-between items-center">
                <p className="text-[48px] leading-[48px] tracking-[-1.2px] font-extrabold font-montserrat text-white mt-1 mb-6">{viewBalance ? formattedCurrency(balance, "en-US", "USD") : "••••"}</p>
                <button className=" object-cover object-center cursor-pointer">
                        <img className=" object-cover object-center "
                        src={viewBalance?"/withdrawal/icons8-hide-35.png":" /withdrawal/mdi_eye.svg"} 
                        alt="Balance Card Background"
                        onClick={onToggleBalanceVisibility}
                        />
                </button>
            </div>
            <p className="text-s[20px] text-white font-bold leading-[24px] font-montserrat">{viewBalance ? `≈  ${formattedCurrency(balance * 1500, "en-NG", "NGN")}` : "••••"}</p>
            
        </div>
        <p className="text-white mt-4 bg-[#E5E2E133] py-[4px] px-[12px] rounded-full w-[151px] text-[12px] font-bold font-manrope leading-[18px]"> <span className=" inline-flex w-2 h-2 mr-[6px] rounded-full bg-[#00FFDB] "></span> INSTANT LIQUIDITY</p>
      
      <button className="flex items-center justify-center cursor-pointer gap-2 w-[133px] absolute top-2 right-10 bg-[#FFFFFF99] py-[4px] px-[12px] rounded-full ">
        <BeneficiaryIcon className="w-[14px] h-[14px]"/>
        <p className="text-[#006B5C] font-montserrat font-bold text-[12px] leading-[18px] ">Beneficiary</p>
      </button>
      
    </div> 
  );
}