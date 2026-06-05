import React, { useState } from 'react';

import {
  Check,
  Copy,
} from 'lucide-react'; // Clean icon options

export default function CopyAddressButton({ address, top }) {
  const [copied, setCopied] = useState(false);

  //Truncate address for UI display (e.g., "0x71C1...63a9")
  //   const truncatedAddress = address
  //     ? `${address.slice(0, 6)}...${address.slice(-4)}`
  //     : "";

  const handleCopy = async () => {
    if (!address) return;

    try {
      //function to write address to user clipboard
      await navigator.clipboard.writeText(address);

      setCopied(true);

      // Reset the button icon to normal
      setTimeout(() => setCopied(false), 2000);
      console.log("Copied");
    } catch (err) {
      console.error("Failed to copy address to clipboard: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex justify-center cursor-pointer items-center gap-2 bg-[#FFFFFF]/60 hover:backdrop-blur-2xl px-2 py-5 rounded-full text-xs leading-4.75 text-[#006B5C] font-bold transition-colors duration-200 w-[191px] h-[26px] ${top ? top : "mt-4"}`}
    >
      {/* Toggle between Copy and Check icon */}
      {copied ? (
        <Check className="w-4 h-4 text-emerald-500" />
      ) : (
        <Copy className="w-4 h-4 text-emerald-500" />
      )}
      <span className="font-montserrat tracking-normal ">
        {copied ? "Address Copied" : "Copy Wallet Address"}
      </span>
    </button>
  );
}
