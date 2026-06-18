"use client";

import { BankIcon } from "@/src/components/ui/Icons";

function CopyIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 8.5L7 10l3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AccountCard({
  accountNumber,
  accountName,
  copied,
  onCopy,
}) {
  return (
    <div className="w-full rounded-[40px] bg-white px-6 py-6 shadow-[0_20px_60px_rgba(0,107,92,0.08)]">

      {/* Header */}
      <div className="flex items-center gap-4 pb-5 border-b border-[#e7e7e7]">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-3xl bg-white text-[#006B5C] shadow-sm">
          <BankIcon className="h-6 w-6" />
        </div>

        <div>
          <p className="font-montserrat w-[168px] h-[32px] text-[24px] font-bold leading-[32px] tracking-[-0.6px] text-[#006B5C]">
            Bank Transfer
          </p>
          <p className="text-[13px] text-[#64748b]">
            Free instant bank funding within 10s
          </p>
        </div>
      </div>

      {/* Account Number */}
      <div className="pt-5 pb-5 border-b border-[#e7e7e7]">
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#64748b]">
            VOYA ACCOUNT NUMBER
          </p>

          <div className="flex items-center justify-between gap-4 rounded-[28px] bg-white px-4 py-4 shadow-[0_0_0_1px_rgba(15,23,42,0.06)]">
            <span className="min-w-0 truncate text-[28px] font-bold tracking-[0.02em] text-[#111]">
              {accountNumber}
            </span>

            <button
              type="button"
              onClick={onCopy}
              className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f3f5f7] text-[var(--color-brand-primary-deep)] transition hover:bg-[#e8ecef]"
            >
              <CopyIcon className="h-4 w-4" />
            </button>
          </div>

          {copied && (
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#1f9d55] bg-[#ecfdf5] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1f9d55] shadow-sm">
              <CheckIcon className="h-3.5 w-3.5" />
              COPIED
            </div>
          )}
        </div>
      </div>

      {/* Account Name */}
      <div className="pt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#64748b]">
          VOYA ACCOUNT NAME
        </p>
        <p className="text-[16px] font-semibold mt-1 text-[#111]">{accountName}</p>
      </div>
    </div>
  );
}