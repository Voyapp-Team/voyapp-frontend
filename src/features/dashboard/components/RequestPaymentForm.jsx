"use client";

import { useState } from "react";
import { Send, Globe, Wallet, FileText, Repeat, ChevronDown } from "lucide-react";

export default function RequestPaymentForm({ onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState({
    paymentAmount: "",
    receiveIn: "USDC",
    network: "ERC20",
    walletAddress: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.paymentAmount || parseFloat(formData.paymentAmount) <= 0) {
      newErrors.paymentAmount = "Please enter a valid amount";
    }

    if (!formData.receiveIn.trim()) {
      newErrors.receiveIn = "Please select a currency";
    }

    if (!formData.network.trim()) {
      newErrors.network = "Please select a network";
    }

    if (!formData.walletAddress.trim()) {
      newErrors.walletAddress = "Wallet address is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await onSubmit(formData);
  };

  const receiveInOptions = [
    { label: "USDC", value: "USDC", subLabel: "USD Coin (ERC-20)" },
    { label: "USDT", value: "USDT", subLabel: "Tether (TRC-20)" },
    { label: "BTC", value: "BTC", subLabel: "Bitcoin" },
  ];

  const networkOptions = [
    { label: "TRC20", value: "TRC20", subLabel: "Tron" },
    { label: "ERC20", value: "ERC20", subLabel: "Ethereum" },
    { label: "BEP20", value: "BEP20", subLabel: "Binance" },
  ];

  const formFields = [
    {
      label: "Amount",
      name: "paymentAmount",
      type: "number",
      placeholder: "0.00",
      value: formData.paymentAmount,
      icon: null,
    },
    {
      label: "Receive In",
      name: "receiveIn",
      type: "select",
      options: receiveInOptions,
      value: formData.receiveIn,
      icon: null,
    },
    {
      label: "Network",
      name: "network",
      type: "select",
      options: networkOptions,
      value: formData.network,
      icon: null,
    },
    {
      label: "Wallet Address",
      name: "walletAddress",
      type: "text",
      placeholder: "",
      value: formData.walletAddress,
      icon: Wallet,
    },
    {
      label: "Repeat Frequency",
      name: "note",
      type: "text",
      placeholder: "Every month",
      value: formData.note,
      icon: Repeat,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 pb-8 mt-8">
      {/* Hero Header Box - Gradient Bordered (now contains the large amount box) */}
      <div className="border-4 border-transparent bg-gradient-to-r from-[#006B5C] to-[#00C2A8] rounded-[48px] p-[1px] mb-10">
        <div className="bg-white rounded-[47px] px-8 py-12">
          <div className="text-center mb-6">
            <p className="text-[12px] uppercase tracking-widest text-[#9CA3AF]">
              PAYMENT AMOUNT
            </p>
          </div>

          <div className="bg-white rounded-[18px] px-6 py-8">
<div className="flex flex-col gap-8 mb-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-[24px] bg-[#E7F7F3] flex items-center justify-center">
                    <span className="text-[24px] font-semibold text-[#006B5C]">$</span>
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.2em] text-[#9CA3AF]">
                      PAYMENT AMOUNT
                    </p>
                  </div>
                </div>

                <input
                  type="number"
                  name="paymentAmount"
                  value={formData.paymentAmount}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="0.00"
                  className="w-full max-w-[320px] bg-transparent text-right text-[52px] font-semibold text-[#1C1B1B] placeholder:text-[#D1D5DB] focus:outline-none"
                />
              </div>

            <p className="text-center text-[13px] text-[#6B7280]">
              How much do you want to request?
            </p>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Render remaining fields (payment amount moved into hero) */}
        {formFields.slice(1).map((field) => {
          const IconComponent = field.icon;
          return (
            <div key={field.name}>
              <label className="block font-manrope text-[12px] uppercase tracking-widest text-[#9CA3AF] mb-2">
                {field.label}
              </label>
              <div className="bg-[#F6F3F2] rounded-[12px] px-4 py-4">
                <div className="flex items-center gap-4">
                  {field.name !== "walletAddress" && (
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#00C2A8] bg-opacity-20 flex items-center justify-center">
                        {field.type === "select" ? (
                          <div className="w-4 h-4 rounded-full bg-[#00C2A8]" />
                        ) : (
                          <IconComponent className="w-5 h-5 text-[#00C2A8]" />
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex-1 relative">
                    {field.type === "select" ? (
                      <>
                        <select
                          name={field.name}
                          value={field.value}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-full appearance-none bg-transparent pr-10 text-[16px] font-normal leading-6 text-[#1C1B1B] placeholder:text-[#3C4A4680] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.subLabel ? `${option.label} • ${option.subLabel}` : option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
                      </>
                    ) : field.name === "walletAddress" ? (
                      <div className="relative">
                        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM17.75 12C18.0887 10.6882 18.0887 9.31182 17.75 8H13.93C14.0221 9.33174 14.0221 10.6683 13.93 12H17.75ZM16.93 14H13.71C13.5429 15.2054 13.2237 16.3848 12.76 17.51C14.5167 16.862 15.9917 15.6204 16.93 14ZM8.08 12H11.92C12.0286 10.6689 12.0286 9.33112 11.92 8H8.08C7.97142 9.33112 7.97142 10.6689 8.08 12ZM8.33 14C8.74 16.4 9.46 18 10 18C10.54 18 11.26 16.4 11.67 14H8.33ZM2.25 12H6.07C5.97794 10.6683 5.97794 9.33174 6.07 8H2.25C1.91129 9.31182 1.91129 10.6882 2.25 12ZM3.07 14C4.00826 15.6204 5.48328 16.862 7.24 17.51C6.82 16.55 6.5 15.35 6.29 14H3.07ZM16.93 6C15.9917 4.3796 14.5167 3.13804 12.76 2.49C13.18 3.45 13.5 4.65 13.71 6H16.93ZM8.33 6H11.67C11.26 3.6 10.54 2 10 2C9.46 2 8.74 3.6 8.33 6ZM3.07 6H6.29C6.49 4.65 6.82 3.45 7.24 2.49C5.48328 3.13804 4.00826 4.3796 3.07 6Z" fill="black"/>
                          </svg>
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-full bg-transparent pl-12 text-[16px] font-normal leading-6 text-[#1C1B1B] placeholder:text-[#3C4A4680] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full bg-transparent text-[16px] font-normal leading-6 text-[#1C1B1B] placeholder:text-[#3C4A4680] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    )}
                  </div>
                </div>
                {errors[field.name] && (
                  <div className="text-[12px] text-red-500 font-manrope mt-2 ml-14">
                    {errors[field.name]}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Button - Gradient */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-12 py-4 px-6 rounded-[12px] bg-gradient-to-r from-[#006B5C] to-[#00C2A8] text-white font-bold text-[16px] transition hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        {isLoading ? "Sending..." : "Send Payment Request"}
      </button>
    </form>
  );
}
