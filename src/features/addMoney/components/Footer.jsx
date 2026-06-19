"use client"
import { ShieldNotCheckedIcon } from "@/src/components/ui/Icons"

export default function Footer(){
    return(
        <div className=" max-w-[451px] m-auto bg-[#FFFFFF] border border-[#F0F0F0] rounded-[30px] flex gap-2.5 justify-center items-center p-2">
            <ShieldNotCheckedIcon className="w-9 h-9" />
            <div>
                <h2 className="font-montserrat font-bold text-base leading-6 text-[#1C1B1B]">
                Your funds are safe
                </h2>
                <p className="font-montserrat font-regular text-sm leading-5">
                Multi secuirty and cold storage protection enabled.
                </p>
            </div>
        </div>
    )
}