"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/src/components/ui/Button";
import InputError from "@/src/components/ui/InputError";
import { ArrowRightIcon, ClockIcon, LockIcon } from "@/src/components/ui/Icons";
import useOnboarding from "../../hooks/useOnboarding";
import OtpInput from "../../../../components/ui/OtpInput";
import useVerifyOtp from "../../hooks/useVerifyOtp";

const RESEND_SECONDS = 24;

const OtpVerification = ({
 
  maskedPhone = "+234 *** *** 4290",
  className = "",
  showSecurityFooter = true,
  buttonLabel = "Verify and Continue",
 
  length = 6,
}) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const [otpError, setOtpError] = useState("");
  const { loading, error, verifyCode } = useVerifyOtp();
  const { onboardingData } = useOnboarding();

 


  useEffect(() => {
    if (seconds <= 0) return undefined;

    const id = setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const formatted = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
    seconds % 60,
  ).padStart(2, "0")}`;

  function handleResend() {
    setSeconds(RESEND_SECONDS);
    setOtpError("");
  }

  async function handleSubmit() {
    console.log("handleSubmit called with otp:", otp);
    if (otp.length !== length) {
      setOtpError("Enter the full 6-digit verification code.");
      return;
    }

    setOtpError("");
    console.log("Calling verifyCode with otp:", otp);
    console.log(onboardingData);
    await verifyCode(otp);
  }

  const isSubmitDisabled = otp.length !== length;

  return (
    <div className={`w-full p-6 ${className}`.trim()}>
      <div>
        <h1 className="font-montserrat text-[30px] font-semibold leading-[1.16] text-[#1C1B1B] sm:text-[34px]">
          Verify it&apos;s <span className="text-[#00A991]">you.</span>
        </h1>
        <p className="mt-4 font-manrope text-[15px] leading-6 text-[#3C4A46]">
          We&apos;ve sent a 6-digit verification code to
        </p>
        <p className="font-manrope text-[15px] font-semibold text-[#1C1B1B]">{maskedPhone}.</p>
      </div>

      <div className="mt-12">
        <OtpInput length={length} onChange={(value) => {
          setOtp(value);
          if (otpError) setOtpError("");
        }} />
      </div>

      <InputError message={otpError} />

      <div className="mt-10 flex flex-col items-center gap-3">
        <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#B8EDDF]/30 px-4 font-manrope text-sm font-semibold text-[#006B5C]">
          <ClockIcon className="h-3.5 w-3.5" />
          {formatted}
        </span>
        <button
          type="button"
          onClick={handleResend}
          disabled={seconds > 0}
          className="font-manrope text-sm font-semibold text-[#00A991] transition hover:text-[#006B5C] disabled:cursor-default disabled:opacity-50"
        >
          Resend Code
        </button>
      </div>

      <Button
        className="mt-12 h-[52px] rounded-xl font-plusJakartaSans text-[15px] font-bold"
        onClick={handleSubmit}
        endIcon={<ArrowRightIcon className="h-5 w-5" />}
        disabled={isSubmitDisabled}
      >
        {loading ? "Loading..." : buttonLabel}
       
      </Button>

      {showSecurityFooter ? (
        <div className="mt-10 flex items-center justify-center gap-1.5 border-t border-[#E1E1E1] pt-5 font-manrope text-[12px] font-medium leading-4 text-[#6C7A76]">
          <LockIcon className="h-3.5 w-3.5" />
          <span>Secured by Voya Vault Systems</span>
        </div>
      ) : null}
    </div>
  );
};

export default OtpVerification;
