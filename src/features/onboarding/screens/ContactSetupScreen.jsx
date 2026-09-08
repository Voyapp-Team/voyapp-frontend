"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../components/ui/Button";
import InputError from "../../../components/ui/InputError";
import { ArrowRightIcon } from "../../../components/ui/Icons";
import SegmentedControl from "../../../components/ui/SegmentedControl";
import OnboardingSplitShell from "../components/common/OnboardingSplitShell";
import PhoneNumberField from "../components/common/PhoneNumberField";
import Link from "next/link";
import useSignup from "../hooks/useSignup";


const AUTH_TABS = [
  { label: "Phone", value: "phone" },
  { label: "Email", value: "email" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,15}$/;

export default function ContactSetupScreen() {
  const { requestOtp } = useSignup();
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState("phone");
  const [region, setRegion] = useState("+234");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState("");
  
 
 

  async function handleContinue() {
    
    setFieldError("");

    if (authMethod === "phone") {
      const trimmedPhone = phone.trim();
      if (!trimmedPhone) {
        setFieldError("Phone number is required");
        return;
      }
      if (!phoneRegex.test(trimmedPhone)) {
        setFieldError("Enter a valid phone number");
        return;
      }
    } else {
      const trimmedEmail = email.trim();
      if (!trimmedEmail) {
        setFieldError("Email address is required");
        return;
      }
      if (!emailRegex.test(trimmedEmail)) {
        setFieldError("Enter a valid email address");
        return;
      }
    }

    await requestOtp(authMethod === "phone" ? `${region}${phone}` : email);
    
  }

  return (
    <OnboardingSplitShell backHref="/onboarding" currentStep={0} totalSteps={5}>
      <div>
        <h1 className="font-montserrat text-[30px] font-semibold leading-[1.16] text-[#1C1B1B] sm:text-[34px]">
          Let's get you set up
        </h1>
        <p className="mt-4 font-manrope text-[15px] leading-6 text-[#3C4A46]">
          Start your journey to financial clarity in seconds.
        </p>
      </div>

      <SegmentedControl
        className="mt-8 h-[52px] rounded-full bg-[#F6F3F2] p-1"
        optionClassName="h-11 rounded-full text-[14px] font-extrabold"
        options={AUTH_TABS}
        value={authMethod}
        name="auth-method"
        onSelect={(value) => {
          setAuthMethod(value);
          setFieldError("");
        }}
      />

      <div className="mt-8">
        {authMethod === "phone" ? (
          <>
            <PhoneNumberField
              label="Phone Number"
              labelClassName="text-[12px] font-extrabold tracking-[0.14em] text-[#6C7A76]"
              inputWrapperClassName="mt-3"
              inputClassName="text-[15px]"
              region={region}
              onRegionChange={(event) => setRegion(event.target.value)}
              value={phone}
              onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
              error={fieldError}
            />
            <InputError message={fieldError} />
          </>
        ) : (
          <>
            <label className="block">
              <span className="font-plusJakartaSans text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#6C7A76]">
                Email address
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={`mt-3 h-14 w-full rounded-xl border ${fieldError ? "border-[#BA1A1A]" : "border-[#E1E1E1]"} bg-white px-5 font-manrope text-[15px] text-[#1C1B1B] outline-none transition placeholder:text-[#9C9C9C] focus:border-[#006B5C] focus:ring-4 focus:ring-[#006B5C]/10`}
                aria-invalid={fieldError ? "true" : "false"}
              />
            </label>
            <InputError message={fieldError} />
          </>
        )}
      </div>

      <p className="mt-8 font-manrope text-[13px] leading-6 text-[#6F7A76]">
        By continuing, you agree to Voya&apos;s{" "}
        <a href="#" className="font-semibold text-[#006B5C]">
          Terms
        </a>{" "}
        and{" "}
        <a href="#" className="font-semibold text-[#006B5C]">
          Privacy Policy
        </a>
        .
      </p>

      <Button
        className="mt-8 h-14 rounded-xl font-plusJakartaSans text-[15px] font-bold"
        onClick={handleContinue}
        endIcon={<ArrowRightIcon className="h-5 w-5" />}
      >
        Continue
      </Button>

      <p className="mt-6 text-center font-manrope text-sm text-[#7A7A7A]">
        Already have an account?{" "}
        <Link
          href="/onboarding/login/freelancer"
          className="font-semibold text-[#006B5C]"
        >
          Log in
        </Link>
      </p>
      <div id="recaptcha-container"></div>
    </OnboardingSplitShell>
  );
}
