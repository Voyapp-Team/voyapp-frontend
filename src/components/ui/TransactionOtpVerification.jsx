"use client";
import OtpInput from "@/src/components/ui/OtpInput";
import InputError from "@/src/components/ui/InputError";

export default function TransactionOtpVerification({setOtp, inputError}) {
    return (
        <div className="pb-10">
            <p className=" text-[16px] text-center font-montserrat font-bold md:text-[24px] text-[#FFFFFF]"> Input your 4 digits pin</p>
            <div className="mt-8">
                <OtpInput length={4} onChange={setOtp} className="bg-[#006B5C33] text-[#ffffff] rounded-[30px] w-[95px] h-[102px]" />
            </div>
            <InputError message={inputError}/>
        </div>
    )
}