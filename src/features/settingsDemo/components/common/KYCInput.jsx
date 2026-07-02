"use client"

export default function KYCInput({ label, placeholder, type, value, onChange, inputMode, pattern, name }) {
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
        className="border border-[#E1E1E1] bg-[#FFFFFF] text-[#1C1B1B] h-[88px] focus:ring-2 focus:ring-[#006B5C] focus:outline-none py-2 px-4 rounded-2xl"
      />

      <div className="w-5 h-5 rounded-full p-2 bg-[#00C2A8] text-[#FFFFFF] flex items-center justify-center absolute top-14 right-4">✓</div>
    </div> 
  );
}
