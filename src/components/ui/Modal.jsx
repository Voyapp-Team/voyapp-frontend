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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000067c]"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute flex items-center justify-center top-4 right-4 w-10 h-10 bg-[#F6F3F2] rounded-full cursor-pointer hover:bg-gray-200 transition"
        >
          <CancelIcon className="w-4 h-4" />
        </button>

        {children}
      </div>
    </div>
  );
}