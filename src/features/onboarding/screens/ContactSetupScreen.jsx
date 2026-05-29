"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "../../../components/ui/Button";
import { ArrowRightIcon } from "../../../components/ui/Icons";
import SegmentedControl from "../../../components/ui/SegmentedControl";
import OnboardingSplitShell from "../components/common/OnboardingSplitShell";
import PhoneNumberField from "../components/common/PhoneNumberField";

const AUTH_TABS = [
  { label: "Phone", value: "phone" },
  { label: "Email", value: "email" },
];

export default function ContactSetupScreen() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState("phone");

  return (
    <OnboardingSplitShell currentStep={0} totalSteps={5}>
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
        onSelect={setAuthMethod}
      />

      <div className="mt-8">
        {authMethod === "phone" ? (
          <PhoneNumberField
            label="Phone Number"
            labelClassName="text-[12px] font-extrabold tracking-[0.14em] text-[#6C7A76]"
            inputWrapperClassName="mt-3 min-h-14 rounded-xl border-[#E1E1E1]"
            inputClassName="text-[15px]"
          />
        ) : (
          <label className="block">
            <span className="font-plusJakartaSans text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#6C7A76]">
              Email address
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-3 h-14 w-full rounded-xl border border-[#E1E1E1] bg-white px-5 font-manrope text-[15px] text-[#1C1B1B] outline-none transition placeholder:text-[#9C9C9C] focus:border-[#006B5C] focus:ring-4 focus:ring-[#006B5C]/10"
            />
          </label>
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
        onClick={() => router.push("/onboarding/verify")}
        endIcon={<ArrowRightIcon className="h-5 w-5" />}
      >
        Continue
      </Button>

      <p className="mt-6 text-center font-manrope text-sm text-[#7A7A7A]">
        Already have an account?{" "}
        <a
          href="/onboarding/login"
          className="font-semibold text-[#006B5C]"
          onClick={(event) => {
            event.preventDefault();
            router.push("/onboarding/login");
          }}
        >
          Log in
        </a>
      </p>
    </OnboardingSplitShell>
  );
}
