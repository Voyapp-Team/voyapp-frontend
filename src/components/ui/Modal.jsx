"use client";

import { useEffect } from "react";
import { CancelIcon } from "./Icons";

export default function Modal({ children, onClose }) {

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000006c8] px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[500px] rounded-[32px] bg-white px-[59px] pb-[57px] pt-[78px] shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:rounded-[50px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-[33px] top-[25px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F6F3F2] transition hover:bg-gray-200"
        >
          <CancelIcon className="w-4 h-4" />
        </button>

        {children}
      </div>
    </div>
  );
}
