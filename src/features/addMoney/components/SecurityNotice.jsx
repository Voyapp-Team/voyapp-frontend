"use client";

export default function SecurityNotice() {
  return (
    <div className="w-full rounded-[32px] border border-[#e7e7e7] bg-white px-4 py-4 flex items-center gap-4 shadow-[0_16px_40px_rgba(0,107,92,0.08)]">
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-2xl bg-[var(--color-brand-soft)]">
        <img
          src="https://www.figma.com/api/mcp/asset/c5553ccb-84a4-4851-baf7-0b4ca9ac8d30"
          alt="Security shield icon"
          className="h-6 w-6 object-contain"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="font-montserrat text-[14px] font-semibold text-[#111]">
          Your funds are safe
        </p>
        <p className="text-[12px] text-[#64748b]">
          Multi security and cold storage protection enabled.
        </p>
      </div>
    </div>
  );
}