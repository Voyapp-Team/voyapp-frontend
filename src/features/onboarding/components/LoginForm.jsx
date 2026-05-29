"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { VoyaMark } from "@/src/components/brand/VoyaLogo";
import Button from "@/src/components/ui/Button";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  AtIcon,
  FingerprintIcon,
  LockIcon,
} from "@/src/components/ui/Icons";
import Modal from "@/src/components/ui/Modal";
import InputError from "@/src/components/ui/InputError";

import OtpVerification from "./common/OtpVerification";
import inputValidation from "../utils/inputValidation";

export default function LoginForm() {
  const [accountIdentifier, setAccountIdentifier] = useState("");
  const [inputError, setInputError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputError("");
    const validationResult = inputValidation({ accountIdentifier });

    if (Object.keys(validationResult).length > 0) {
      setInputError(validationResult.accountIdentifier);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#F8F8F8] px-8 py-[26px] sm:min-h-[698px] sm:max-w-[530px] sm:rounded-[50px] sm:px-[74px]">
      <button
        type="button"
        aria-label="Go back"
        onClick={() => router.push("/onboarding/username")}
        className="absolute left-8 top-[26px] inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#006B5C] shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD] sm:left-11"
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>

      <div className="mx-auto mt-[38px] hidden h-[139px] w-[139px] items-center justify-center rounded-full bg-white shadow-[0_1px_4px_3px_rgba(0,0,0,0.03)] sm:flex">
        <VoyaMark className="h-[58px] w-[99px]" />
      </div>

      <div className="mx-auto mt-24 w-full max-w-[382px] sm:mt-7">
        <h1 className="font-montserrat text-[28px] font-extrabold leading-10 text-[#1C1B1B] sm:text-center">
          Welcome back
        </h1>
        <p className="mt-2 font-montserrat text-[18px] font-medium leading-7 text-[#3C4A46]">
          Secure access to your wealth sanctuary.
        </p>

        <form className="mt-12" onSubmit={handleSubmit}>
          <label
            htmlFor="accountIdentifier"
            className="mb-3 block font-manrope text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-[#006B5C]"
          >
            Account identifier
          </label>
          <div className="relative">
            <input
              type="text"
              id="accountIdentifier"
              value={accountIdentifier}
              onChange={(event) => {
                setAccountIdentifier(event.target.value);
                setInputError("");
              }}
              placeholder="Phone number or Email"
              className="block h-14 w-full rounded-xl border border-[#E1E1E1] bg-white pl-12 pr-4 font-manrope text-sm text-[#2C2C2C] outline-none placeholder:text-[#C1C1C1] focus:border-[var(--color-brand-accent)]"
            />
            <AtIcon className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6C7A76]" />
          </div>
          <InputError message={inputError} />

          <Button
            className="mt-12 h-[52px] rounded-xl font-plusJakartaSans text-[15px] font-bold"
            type="submit"
            endIcon={<ArrowRightIcon className="h-5 w-5" />}
          >
            Continue
          </Button>
        </form>

        <p className="mt-6 text-center font-manrope text-[16px] font-medium leading-6 text-[#3C4A46]">
          Don&apos;t have an account?{" "}
          <a href="/onboarding" className="font-semibold text-[#006B5C]">
            Sign up
          </a>
        </p>

        <div className="mt-14 sm:hidden">
          <p className="text-center font-manrope text-[12px] uppercase leading-4 tracking-[0.1em] text-[#6C7A76]">
            Or secure entry with
          </p>
          <FingerprintIcon className="mx-auto mb-5 mt-7 h-[74px] w-[67px]" />
          <p className="text-center font-manrope text-[12px] uppercase leading-4 tracking-[0.1em] text-[#6C7A76]">
            Tap here
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-1.5 border-t border-[#E1E1E1] pt-5 font-manrope text-[12px] font-medium leading-4 text-[#6C7A76] sm:mt-20">
          <LockIcon className="h-3.5 w-3.5" />
          <span>Secured by Voya Vault Systems</span>
        </div>
      </div>

      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <OtpVerification
            className="mx-auto max-w-[382px]"
            showSecurityFooter={false}
            buttonLabel="Verify and Continue"
            handleClick={() => {
              setShowModal(false);
              router.push("/dashboard");
            }}
          />
        </Modal>
      ) : null}
    </div>
  );
}
