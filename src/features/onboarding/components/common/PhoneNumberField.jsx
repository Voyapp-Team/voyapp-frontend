"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../../../../components/ui/Icons";
import COUNTRY_PHONE_CODES from "./countryPhoneCodes";

function getIsoFromFlag(flag = "") {
  return Array.from(flag)
    .map((char) => String.fromCodePoint(char.codePointAt(0) - 127397))
    .join("");
}

export default function PhoneNumberField({
  className = "",
  label = "Phone Number",
  labelClassName = "",
  placeholder = "801 555 0123",
  inputWrapperClassName = "",
  inputClassName = "",
  value = "",
  onChange,
  region = "+234",
  regions = COUNTRY_PHONE_CODES,
  onRegionChange,
  error = "",
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const selectedRegion = regions.find((option) => option.value === region) ?? regions[0];
  const selectedFlag = selectedRegion?.flag ?? "";
  const selectedIso = selectedFlag ? getIsoFromFlag(selectedFlag) : "";
  const selectedIconSrc = selectedIso ? `https://flagcdn.com/w20/${selectedIso.toLowerCase()}.png` : "";

  return (
    <label className={`block ${className}`.trim()}>
      <span
        className={`mb-2 block font-plusJakartaSans text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#6C7A76] ${labelClassName}`.trim()}
      >
        {label}
      </span>
      <div
        className={`relative mt-3 flex h-14 w-full items-center rounded-xl border ${error ? "border-[#BA1A1A]" : "border-[#E1E1E1]"} bg-white transition ${inputWrapperClassName}`.trim()}
      >
        <div className="relative flex items-center gap-2 border-r border-[#E1E1E1] pl-4 pr-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-md">
            {selectedIconSrc && !imageFailed ? (
              <img
                src={selectedIconSrc}
                alt={selectedRegion.label}
                className="h-full w-full object-cover"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <span
                className="text-base leading-none"
                style={{ fontFamily: 'Apple Color Emoji, "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif' }}
              >
                {selectedFlag}
              </span>
            )}
          </div>
          <span className="text-[13px] font-semibold text-black">{selectedRegion.value}</span>
          <ChevronDownIcon className="pointer-events-none h-3 w-3 text-black" />
          <select
            value={region}
            onChange={onRegionChange}
            className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
            aria-label="Country code"
          >
            {regions.map((option) => (
              <option key={`${option.flag}-${option.value}`} value={option.value}>
                {`${option.flag} ${option.label} (${option.value})`}
              </option>
            ))}
          </select>
        </div>
        <input
          type="tel"
          inputMode="tel"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`flex-1 h-full bg-transparent font-manrope text-[15px] text-[#1C1B1B] outline-none placeholder:text-[#9C9C9C] px-4 ${inputClassName}`.trim()}
          aria-invalid={error ? "true" : "false"}
        />
      </div>
    </label>
  );
}
