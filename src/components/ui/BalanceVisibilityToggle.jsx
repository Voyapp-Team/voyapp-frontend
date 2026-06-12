"use client";

import { EyeOff } from "lucide-react";
import { EyeOpenIcon } from "@/src/components/ui/Icons";

export default function BalanceVisibilityToggle({ isHidden, onToggle, className = "" }) {
  return (
    <button
      type="button"
      aria-label={isHidden ? "Show balance" : "Hide balance"}
      onClick={onToggle}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-white ${className}`}
    >
      {isHidden ? <EyeOff className="h-5 w-5" /> : <EyeOpenIcon className="h-5 w-5" />}
    </button>
  );
}
