"use client"
import Button from "@/src/components/ui/Button"
import { useState } from "react";

export default function AddMoney () {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (value) => {
        await navigator.clipboard.writeText(value);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    return(
        <section className="max-w-[563px]  m-auto h-[466px] rounded-[50px] bg-[#ffffff] pt-6 px-10 p6 mb-20">
            <div className="flex items-enter gap-2  border-b border-[#E7E7E7] mb-6">
                <div className="w-[54px] h-[54px] bg-[#FBFBFB] p-[10px] rounded-[10px]">
                 <img src="/bank-icon2.svg"/>
                </div>
                <div>
                    <h2 className="font-montserrat font-bold text-[24px] leading-8 text-[#006B5C] ">Bank Transfer</h2>
                    <p className="font-montserrat text-[14px] leading-8 tracking-[-0.6px] text-[#787878] ">Free instant bank funding within 10s</p>
                </div>
            </div>

            <div className=" border-b border-[#E7E7E7] pb-6 mb-6">
                <div className="relative mb-6">
                    <p className="font-montserrat font-bold text-[14px] leading-8 tracking-[-0.6px] text-[#787878] ">VOYA ACCOUNT NUMBER</p>
                    <p className="font-montserrat font-bold text-[40px] leading-8 tracking-[-0.6px] text-[#000000] ">8124163754</p>
                    <button 
                     type="button"
                     aria-label="Copy Account Number"
                     onClick={() => handleCopy("8124163754")}
                     className=" flex items-center absolute justify-center cursor-pointer w-[40px] h-[40px] bg-[#FBFBFB]  rounded-[12px] left-[245px] bottom-[1%]"
                    >
                        <img src="/copy-icon.svg"/>
                    </button>
                    {copied &&<p className="text-green-600 text-[10px] absolute left-[290px] bottom-[20%]">copied!</p>}
                </div>

                <div>
                    <p className="font-montserrat font-bold text-[14px] leading-8 tracking-[-0.6px] text-[#787878] ">VOYA ACCOUNT NAME</p>
                    <p className="font-montserrat font-bold text-[20px] leading-8 tracking-[-0.6px] text-[#000000] ">PRINCE SOMADINA NWORIE</p>
                    <img/>
                </div>
            </div>

            <Button>
                SHARE DETAILS
            </Button>

        </section>
    )
}