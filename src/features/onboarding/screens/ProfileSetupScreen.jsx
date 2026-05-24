"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldIcon,
} from '@/src/components/ui/Icons';
import ProgressSteps from '@/src/components/ui/ProgressSteps';

import { FormInput } from '../components/common/FormInput';

export const ProfileSetupScreen = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] p-4 sm:p-8">
      <div className="relative flex w-full max-w-240 overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
        {/* left image */}
        <div className="relative hidden lg:block lg:w-[55%]">
          <button
            type="button"
            aria-label="Go back"
            onClick={() => router.back()}
            className="absolute left-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-(--color-brand-primary-deep) shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <Image
            src="/onboarding/profileSetupIllustration.svg"
            alt="Happy user customizing their profile on a phone"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
        </div>
        {/* right profile form */}
        <div className="flex flex-col w-full px-8 py-9 lg:w-[45%] gap-y-4  h-screen">
          <ProgressSteps currentStep={2} totalSteps={5} />
          <div className="flex flex-col gap-y-1 mt-3 mb-4">
            <h1 className="font-bold text-2xl tracking-tight md:text-3xl text-[#1a1a1a]">
              What &apos;s your name?
            </h1>
            <p className="text-base text-gray-600 whitesapce-wrap sm:w-[70%]">
              We use this to personalize your experience.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <FormInput
              label={"First Name"}
              className={"text-black/79"}
              placeholder={"e.g Julian"}
              inputClassName={`block bg-[#F6F3F2] py-3`}
            />
            <FormInput
              label={"Last Name"}
              className={"text-black/79 pt-1.5"}
              placeholder={"e.g Thorne"}
              inputClassName={`block bg-[#F6F3F2] py-3`}
            />
          </div>
          <div className="flex items-center gap-2 rounded-xl text-gray-500/60 text-sm bg-[#F3F3F3]  p-5 mb-3 border border-[#E2E2E2]">
            {/* icon */}
            {/* <div className="bg-green-400/30 w-10 h-10 rounded-full"></div> */}
            <ShieldIcon
              className="w-15 h-15"
              rect={"#009b8625"}
              fill={"#009b87"}
            />
            {/* description */}
            <div>
              <p className="font-semibold text-black/50">SECURE IDENTITY</p>
              <p className="text-sm">
                Your legal name is required for regulatory compliance secure
                banking
              </p>
            </div>
          </div>
          <Button
            className="tracking-widest font-extralight cursor-pointer"
            onClick={() => router.push("/onboarding/category")}
            endIcon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Continue
          </Button>
          <div className="flex text-center text-gray-500 px-9 sm:px-6 text-sm">
            <p>
              By Continuing, you agree to our{" "}
              <span className="text-(--color-brand-primary-deep) font-bold">
                Identity Verification Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
