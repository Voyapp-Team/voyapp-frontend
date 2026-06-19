"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BeneficiaryIcon } from "@/src/components/ui/Icons";

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
    { label: "ERC20", value: "ERC20", subLabel: "Ethereum (ERC-20)" },
    { label: "BEP20", value: "BEP20", subLabel: "Binance" },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full px-10 pb-10 pt-8">
      {/* Payment Amount Card */}
      <div className="border-[3px] border-transparent bg-gradient-to-r from-[#006B5C] to-[#00C2A8] rounded-[32px] p-[3px] mb-8">
        <div className="bg-white rounded-[30px] px-8 py-12">
          <div className="text-center mb-8">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[#C4C4C4]">
              PAYMENT AMOUNT
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="text-[56px] font-bold text-[#006B5C]">$</span>
            <input
              type="number"
              name="paymentAmount"
              value={formData.paymentAmount}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="0.00"
              className="text-[56px] font-bold text-[#1C1B1B] placeholder:text-[#E0E0E0] bg-transparent w-[200px] text-center focus:outline-none"
            />
          </div>

          <p className="text-center text-[14px] text-[#6B7280]">
            How much do you want to request?
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Receive In */}
        <div>
          <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-2">
            Receive In
          </label>
          <div className="bg-[#F5F3F3] rounded-[12px] px-4 py-4 relative">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00C2A8]/20 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#00C2A8"/>
                </svg>
              </div>
              <div className="flex-1">
                <select
                  name="receiveIn"
                  value={formData.receiveIn}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full appearance-none bg-transparent text-[15px] font-semibold text-[#1C1B1B] focus:outline-none"
                >
                  {receiveInOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-[12px] text-[#9CA3AF]">
                  {receiveInOptions.find((opt) => opt.value === formData.receiveIn)?.subLabel}
                </p>
              </div>
              <ChevronDown className="text-[#9CA3AF] w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Network */}
        <div>
          <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-2">
            Network
          </label>
          <div className="bg-[#F5F3F3] rounded-[12px] px-4 py-4 relative">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00C2A8]/20 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#00C2A8"/>
                </svg>
              </div>
              <div className="flex-1">
                <select
                  name="network"
                  value={formData.network}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full appearance-none bg-transparent text-[15px] font-semibold text-[#1C1B1B] focus:outline-none"
                >
                  {networkOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.subLabel}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="text-[#9CA3AF] w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Wallet Address */}
        <div>
          <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-2">
            Wallet Address
          </label>
          <div className="bg-[#F5F3F3] rounded-[12px] px-4 py-4 relative">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00C2A8]/20 flex items-center justify-center">
                <BeneficiaryIcon className="w-6 h-6 text-[#00C2A8]" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder=""
                  className="w-full bg-transparent text-[15px] font-semibold text-[#1C1B1B] placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Add a Note */}
        <div>
          <label className="block text-[12px] uppercase tracking-[0.1em] text-[#A3A3A3] mb-2">
            Add a Note (Optional)
          </label>
          <div className="bg-[#F5F3F3] rounded-[12px] px-4 py-4">
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="e.g. Website redesign, Invoice #12"
              className="w-full bg-transparent text-[15px] font-medium text-[#1C1B1B] placeholder:text-[#C4C4C4] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Create Request Link Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-10 py-4 rounded-[12px] bg-gradient-to-r from-[#004D40] to-[#00C2A8] text-white font-semibold text-[16px] transition hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating..." : "Create Request Link"}
      </button>

      {/* Footer Text */}
      <p className="text-center text-[11px] uppercase tracking-[0.15em] text-[#D4D4D4] mt-10">
        VOYA SECURE CRYPTO TRANSFER
      </p>
    </form>
  );
}
