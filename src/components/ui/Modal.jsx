"use client";

import { useEffect } from "react";
import { CancelIcon } from "./Icons";

export default function Modal({ children, onClose, className, overlayClassName, buttonClassName }) {

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-1000 flex items-center justify-center   ${overlayClassName || " bg-[#0000068c]"} `}
      onClick={onClose}
    >
      
      <div
        className={`relative rounded-[50px] shadow-lg p-6 backdrop-blur-xl   ${className || "bg-[#FFFFFF]  max-w-md" }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className={`absolute flex items-center justify-center top-4 right-4 w-10 h-10 rounded-full cursor-pointer hover:bg-gray-200 transition ${buttonClassName || "bg-[#F6F3F2]"} `}
        >
          <CancelIcon className="w-4 h-4" />
        </button>

        {children}
      </div>
      
    </div>
  );
}
