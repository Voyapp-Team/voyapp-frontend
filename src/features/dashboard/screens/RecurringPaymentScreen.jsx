"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RecurringPaymentScreen() {
  const [activeTab, setActiveTab] = useState("active");

  const recurringPayments = [
    {
      id: 1,
      title: "Monthly retainer — Acme Co",
      status: "ACTIVE",
      amount: 500,
      frequency: "Monthly",
      nextPayment: "April 1, 2026",
      totalReceived: 1000,
    },
    {
      id: 2,
      title: "Design Support — Studio Flux",
      status: "ACTIVE",
      amount: 1200,
      frequency: "Weekly",
      nextPayment: "March 28, 2026",
      totalReceived: 4800,
    },
    {
      id: 3,
      title: "Design Support — Studio Flux",
      status: "ACTIVE",
      amount: 1200,
      frequency: "Weekly",
      nextPayment: "March 28, 2026",
      totalReceived: 4800,
    },
    {
      id: 4,
      title: "Design Support — Studio Flux",
      status: "ACTIVE",
      amount: 1200,
      frequency: "Weekly",
      nextPayment: "March 28, 2026",
      totalReceived: 4800,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 px-4 flex justify-center">
      <div
        className="flex flex-col items-center bg-[#F8F8F8] rounded-[48px] overflow-hidden"
        style={{ width: "843px" }}
      >
        {/* Header */}
        <div className="w-full pt-8 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-[32px] font-bold text-[#1C1B1B]">
              Recurring Payments
            </h1>
            <p className="text-[16px] text-[#6B7280] mt-2">
              Manage your automated income
            </p>
          </div>
          <Link
            href="/dashboard/setup-automatic-payment"
            className="flex items-center gap-[10px] bg-[#00C2A8] text-white font-semibold rounded-[10px] px-6 py-3 justify-center"
          >
            <span>New</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="w-full mb-6">
          <div className="flex gap-2 bg-[#E7F3F0] p-1 rounded-[24px] w-fit">
            {["active", "paused", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-[18px] text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-white text-[#1C1B1B] shadow-sm"
                    : "text-[#6B7280] hover:text-[#1C1B1B]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Recurring Payments List */}
        <div className="w-full space-y-6 mb-6">
          {recurringPayments.map((payment) => (
            <div
              key={payment.id}
              className="flex flex-col justify-between"
              style={{
                width: "843px",
                height: "168px",
                background: "white",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between w-full gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: "#B8EDDF",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L13.8 9.2H21L15.4 13.6L17.2 21L12 16.6L6.8 21L8.6 13.6L3 9.2H10.2L12 2Z"
                        fill="#006B5C"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3
                      className="font-semibold text-[#1C1B1B]"
                      style={{ fontSize: "16px", lineHeight: "24px" }}
                    >
                      {payment.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="text-white flex items-center justify-center"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 800,
                      fontSize: "10px",
                      lineHeight: "15px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      background: "#006B5C",
                      padding: "4px 8px",
                      borderRadius: "8px",
                    }}
                  >
                    {payment.status}
                  </span>
                  <span
                    className="font-bold text-[#1C1B1B]"
                    style={{ fontSize: "32px" }}
                  >
                    ${payment.amount}
                  </span>
                  <span
                    className="text-[#6B7280]"
                    style={{ fontSize: "16px" }}
                  >
                    · {payment.frequency}
                  </span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="w-full">
                  <p
                    className="uppercase text-[#A3A3A3] mb-1"
                    style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                  >
                    NEXT PAYMENT
                  </p>
                  <p
                    className="font-medium text-[#1C1B1B]"
                    style={{ fontSize: "16px" }}
                  >
                    {payment.nextPayment}
                  </p>
                </div>
                <div className="w-full text-right">
                  <p
                    className="uppercase text-[#A3A3A3] mb-1"
                    style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                  >
                    TOTAL RECEIVED
                  </p>
                  <p
                    className="font-medium text-[#1C1B1B]"
                    style={{ fontSize: "16px" }}
                  >
                    ${payment.totalReceived.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Peace of Mind Card */}
        <div className="w-full mb-10">
          <div
            className="flex items-center"
            style={{
              width: "843px",
              height: "120px",
              borderRadius: "32px",
              background: "#006B5C",
              padding: "0 32px",
            }}
          >
            <div
              className="flex items-center"
              style={{
                width: "779px",
                height: "81.5px",
                gap: "6.88px",
              }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: "#FFDBD0",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.8 18.8L6.8 16.8L8.2 18.2L12 14.4L15.8 18.2L17.2 16.8L19.2 18.8V19.6H4.8V18.8ZM12 11.2L4.8 4H19.2L12 11.2Z"
                    fill="#9D4224"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3
                  className="font-semibold text-white mb-2"
                  style={{ fontSize: "18px" }}
                >
                  Financial Peace of Mind
                </h3>
                <p
                  className="text-white"
                  style={{ fontSize: "16px" }}
                >
                  Automated income accounts for 64% of your monthly revenue. Keep
                  the momentum going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
