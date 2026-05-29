"use client";

import Button from "@/src/components/ui/Button";


export default function TransactionSuccessSummary({dateTime}) {
    
    return(
        
        <div className="flex flex-col items-center w-full max-w-[448px] md:rounded-[50px]   pt-[98px]">
            <p className="font-plusJakartaSans font-extrabold text-[36px] leading-10 tracking-[-0.9px] text-[#006B5C]">Money Sent!</p>
            <p className="rounded-2xl bg-[#00C2A81A] font-bold text-[36px] leading-10 tracking-[-1.8px] p-4  my-3   font-plusJakartaSans ">N304,920</p>
            <p className="font-manrope font-medium text-[16px] leading-6 text-[#3C4A46]">Sent to GTBank account ...4521</p>
            <p className="font-manrope font-semibold text-[14px] leading-5 tracking-[1.4px] text-[#B5B5B5]">TRANSACTION ID:VO-99283-TRX</p>
        

            <div className=" w-full max-w-[384px] bg-[#F6F3F2BF] p-6 rounded-2xl my-8">
                <div className="flex justify-between items-center  ">
                    <p className="font-manrope font-semibold text-[14px] leading-5 text-[#6C7A76]">Recipient</p>
                    <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">John Adeyemi</p>
                </div>
                <div className="flex justify-between items-center my-6 ">
                    <p className="font-manrope font-semibold text-[14px] leading-5 text-[#6C7A76]">Bank Name</p>
                    <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">Guaranty Trust Bank</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="font-manrope font-semibold text-[14px] leading-5 text-[#6C7A76]">Date & Time</p>
                    <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">{dateTime}</p>
                </div>
        
            </div> 
            <Button
              onClick={() => window.location.href = "/dashboard"}
            >
                Back to Dashboard
            </Button>
            <div className="mt-4 rounded-xl p-[1px] bg-gradient-to-r from-[#006B5C] to-[#00C2A8] w-full max-w-[440px]">
                <div className=" w-full  bg-[#000000] rounded-xl">
                    <button className="w-full text-[16px] leading-[24px]  rounded-xl bg-[#FFFFFF1A] px-4 py-3 text-[#006B5C] font-bold font-plusJakartaSans">
                        Download Receipt
                    </button>
                </div>
            </div>
                
        </div>
    )
}