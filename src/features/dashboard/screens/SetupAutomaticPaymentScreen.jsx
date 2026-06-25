"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SetupAutomaticPaymentScreen() {
  const [amount, setAmount] = useState("0.00");
  const [frequency, setFrequency] = useState("weekly");
  const [startDate, setStartDate] = useState({ month: "05", day: "01", year: "2026" });
  const [internalLabel, setInternalLabel] = useState("");

  const frequencyOptions = [
    { value: "weekly", label: "Weekly" },
    { value: "every-2-weeks", label: "Every 2 Weeks" },
    { value: "monthly", label: "Monthly" },
  ];

  const formatFrequency = (freq) => {
    const option = frequencyOptions.find(opt => opt.value === freq);
    return option?.label?.toLowerCase() || freq;
  };

  const formatStartDate = () => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = months[parseInt(startDate.month) - 1] || "";
    return `${monthName} ${parseInt(startDate.day)}, ${startDate.year}`;
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 px-4">
      <div className="flex flex-col items-center w-full max-w-[844px] m-auto bg-[#F8F8F8] rounded-[48px] overflow-hidden">
        {/* Header with title and recent payments */}
        <div className="w-full px-10 pt-8 pb-4 flex justify-between items-center">
          {/* Title */}
          <h1 className="text-[32px] font-bold text-[#1C1B1B]">Set Up <span className="text-[#00C2A8]">Automatic</span> Payments</h1>
          {/* Recent Payments Button */}
          <Link 
            href="/dashboard/recurring-payment" 
            className="flex items-center gap-[10px] bg-[#00C2A8] text-white font-semibold rounded-[10px] px-6 py-3 justify-center"
          >
            <span>Recent Payments</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="w-full px-10 pb-10">
          {/* Subtitle */}
          <div 
            className="w-full mb-8"
          >
            <p className="text-[16px] text-[#6B7280]">
              Your client approves once. You get paid automatically every cycle. <span className="text-[#00C2A8] font-semibold">Forever.</span>
            </p>
          </div>

          {/* Payment Amount Card */}
          <div className="px-8 py-12 mb-8">
            <div className="text-center mb-8">
              <p className="text-[12px] uppercase tracking-[0.15em] text-[#C4C4C4]">
                PAYMENT AMOUNT
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <span className="text-[56px] font-bold text-[#006B5C]">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="text-[56px] font-bold text-[#1C1B1B] placeholder:text-[#E0E0E0] bg-transparent w-[200px] text-center focus:outline-none"
              />
            </div>

            <p className="text-center text-[14px] text-[#6B7280]">
              How much per payment?
            </p>
          </div>

          {/* Frequency Section */}
      <div className="w-full mb-6">
        <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">
          FREQUENCY
        </label>
        <div 
          className="grid grid-cols-3 gap-3 w-full h-auto"
          style={{
            rowGap: '12px',
            columnGap: '12px',
          }}
        >
          {frequencyOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFrequency(opt.value)}
              className={`w-full h-[44px] rounded-[12px] text-[15px] font-semibold transition-all flex items-center justify-center ${
                frequency === opt.value
                  ? "bg-gradient-to-r from-[#004D40] to-[#00C2A8] text-white"
                  : "bg-[#F6F3F2] text-[#1C1B1B]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

          {/* Start Date Section */}
          <div className="w-full mb-6">
            <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">
              START DATE
            </label>
            <div className="flex gap-3">
              <div className="flex-1 bg-[#F6F3F2] rounded-[12px] px-4 py-4">
                <input
                  type="text"
                  placeholder="mm"
                  maxLength={2}
                  value={startDate.month}
                  onChange={(e) => setStartDate({ ...startDate, month: e.target.value })}
                  className="w-full text-center bg-transparent text-[15px] font-semibold text-[#1C1B1B] placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>
              <span className="flex items-center text-[20px] font-semibold text-[#A3A3A3]">/</span>
              <div className="flex-1 bg-[#F6F3F2] rounded-[12px] px-4 py-4">
                <input
                  type="text"
                  placeholder="dd"
                  maxLength={2}
                  value={startDate.day}
                  onChange={(e) => setStartDate({ ...startDate, day: e.target.value })}
                  className="w-full text-center bg-transparent text-[15px] font-semibold text-[#1C1B1B] placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>
              <span className="flex items-center text-[20px] font-semibold text-[#A3A3A3]">/</span>
              <div className="flex-[2] bg-[#F6F3F2] rounded-[12px] px-4 py-4">
                <input
                  type="text"
                  placeholder="yyyy"
                  maxLength={4}
                  value={startDate.year}
                  onChange={(e) => setStartDate({ ...startDate, year: e.target.value })}
                  className="w-full text-center bg-transparent text-[15px] font-semibold text-[#1C1B1B] placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* No End Date Section */}
          <div className="w-full mb-6 bg-[#F6F3F2] rounded-[12px] px-4 py-4 flex items-center gap-4">
            <div className="w-6 h-6 rounded-full border-2 border-[#006B5C] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#006B5C]" />
            </div>
            <span className="text-[15px] font-medium text-[#1C1B1B]">No end date</span>
          </div>
          <p className="text-[14px] text-[#6B7280] mb-6 -mt-2 ml-10">
            Keep charging until manually cancelled
          </p>

          {/* Internal Label Section */}
          <div className="w-full mb-6">
            <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">
              INTERNAL LABEL (OPTIONAL)
            </label>
            <div className="bg-[#F6F3F2] rounded-[12px] px-4 py-4">
              <input
                type="text"
                placeholder="e.g. Monthly retainer — Acme Co"
                value={internalLabel}
                onChange={(e) => setInternalLabel(e.target.value)}
                className="w-full bg-transparent text-[15px] font-medium text-[#1C1B1B] placeholder:text-[#C4C4C4] focus:outline-none"
              />
            </div>
          </div>

          {/* Live Summary */}
          <div 
            className="w-full rounded-[24px] p-6 border border-transparent mb-10"
            style={{
              background: '#00C2A81A',
              borderWidth: '1px',
              height: '105.625px',
            }}
          >
            <p className="text-[14px] text-[#1C1B1B]">
              <span className="font-semibold">Live Summary</span>
            </p>
            <p className="text-[14px] text-[#6B7280]">
              Your client will be charged ${amount || "0.00"} every {formatFrequency(frequency)}, starting {formatStartDate()}.
            </p>
          </div>

          {/* Create Recurring Link Button */}
          <button className="w-full py-4 rounded-[12px] bg-gradient-to-r from-[#004D40] to-[#00C2A8] text-white font-semibold text-[16px] transition hover:shadow-lg">
            Create Recurring Link
          </button>
        </div>
      </div>
    </div>
  );
}
