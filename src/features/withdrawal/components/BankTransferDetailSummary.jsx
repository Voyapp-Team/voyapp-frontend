"use client";
import { formattedCurrency } from "../utils/formattedCurrency";

export default function BankTransferDetailSummary({bank, accountNumber, amount}) {
        const formattedAccountNumber = accountNumber ? `${accountNumber.slice(0, 4)} **** ${accountNumber.slice(-4)}` : "••••••••••";
    return ( 
        <div className="w-full mt-13">
            <div className=" bg-[#F0EDEC] p-6 rounded-2xl">
                <div className="flex justify-between items-center px-6">
                    <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Service Fee</p>
                    <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">₦100.00</p>
                </div>
                <div className="flex justify-between items-center px-6">
                    <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Arrival Time</p>
                    <p className="font-montserrat font-bold text-[16px] leading-6 text-[#006B5C]">Instant</p>
                </div>

                <div className=" relative mt-10 border-t border-[#BBCAC433] pt-3">
                    <h3 className="font-manrope font-bold text-[14px] leading-5 tracking-[0.7px] text-[#00C2A8] mb-2">YOU RECEIVE</h3>
                    <p className="font-plusJakartaSans font-extrabold text-[36px] leading-[40px] text-[#1C1B1B]">{formattedCurrency(Number(amount), "en-NG", "NGN")}</p>
                    <p className="absolute bottom--2 right-0 flex font-manrope font-bold text-[12px] leading-4 text-[#00C2A8]"><img src="/withdrawal/instant-icon.svg" alt="Fast Icon Illustration " className="mr-1" />EXPRESS</p>
                </div>

                
            </div> 

            <div className="flex items-start gap-4 mt-6 bg-[#FCFCFC] border border-[#60606026]  rounded-3xl p-6">
                <div  className="p-4 bg-[#B8EDDF] rounded-2xl ">
                    <img src="/withdrawal/bank-icon.svg" alt="bank Icon illustration" className="inline-block mr-2" />
                </div>
                <div>
                    <p className="font-manrope font-bold text-[16px] leading-6 text-[#1C1B1B]">JOHN ADEYEMI - UBA -  0123456789</p>
                    <p className="font-manrope text-[14px] leading-[22.75px] tracking-normal text-[#3C4A46]">Estimated arrival less than <span className="font-bold text-[#006B5C] leading-[100%]">1 min</span> to your linked account.</p>   
                </div>
            </div>
        </div>  
    )
}