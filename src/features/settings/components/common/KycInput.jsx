"use client"

import { Checked } from "../kyc-icon";
import InputError from "@/src/components/ui/InputError";

export default function KycInput({ label, placeholder, type, value, onChange, inputMode, pattern, name, error }) {
  return (
    <div className=" relative flex flex-col gap-2 w-full">
      <label className="font-montserrat font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#3C4A46B2]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        inputMode={inputMode}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-[#E1E1E1] bg-[#FFFFFF] text-[#1C1B1B] h-[88px]  focus:border-[#00C2A8] focus:outline-none py-2 px-4 rounded-2xl"
      />
      {label !== "Date of Birth" && <Checked className="absolute top-14.5 right-4" />}
      <InputError message={error} />
    </div> 
  );
}
