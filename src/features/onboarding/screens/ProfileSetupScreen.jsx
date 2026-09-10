"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/src/components/ui/Button';
import { ArrowRightIcon, ShieldIcon} from '@/src/components/ui/Icons';
import InputError from '../../../components/ui/InputError';
import { FormInput } from '../components/common/FormInput';
import OnboardingSplitShell from '../components/common/OnboardingSplitShell';
import inputValidation from '../utils/inputValidation';
import usePersonalInfo from '../hooks/usePersonalInfo';


export const ProfileSetupScreen = () => {
  const router = useRouter();
  const {loading, savePersonalInfo, error} = usePersonalInfo();
  const [userNames, setUserNames] = useState({
    first_name: "",
    last_name: "",
  });

  const [inputError, setInputError] = useState({});
  const handleChange = (e) => {
    setUserNames((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async () => {
    const errors = inputValidation(userNames);

    const inValid = Object.keys(errors).length > 0;
    if (inValid) {
      setInputError(errors);
      return;
    }
    setInputError({});
    await savePersonalInfo(userNames)
  };

  return (
    <OnboardingSplitShell
      imgSrc="/onboarding/profileSetupIllustration.svg"
      imgAlt="Happy user customizing their profile on a phone"
      currentStep={2}
      totalSteps={5}
      shellClassName="lg:min-h-[797px]"
      progressClassName="lg:mt-[54px]"
      contentClassName="mt-14 max-w-[382px]"
      backHref="/onboarding/verify"
    >
      <div>
        <h1 className="font-montserrat text-[30px] font-semibold leading-[1.16] text-[#1C1B1B] sm:text-[34px]">
          What&apos;s your name?
        </h1>
        <p className="mt-4 font-manrope text-[15px] leading-6 text-[#3C4A46]">
          We use this to personalize your experience.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <FormInput
          label="First Name"
          placeholder="e.g Julian"
          inputValue={userNames.first_name}
          inputName="first_name"
          onChange={handleChange}
          labelClassName="font-plusJakartaSans text-[12px] font-extrabold tracking-[0.14em] text-[#6C7A76]"
          inputClassName="h-14 bg-[#F6F3F2] px-5 font-manrope text-[15px]"
        />
        <InputError message={inputError.first_name} />
        <FormInput
          label="Last Name"
          placeholder="e.g Thorne"
          inputValue={userNames.last_name}
          inputName="last_name"
          onChange={handleChange}
          labelClassName="font-plusJakartaSans text-[12px] font-extrabold tracking-[0.14em] text-[#6C7A76]"
          inputClassName="h-14 bg-[#F6F3F2] px-5 font-manrope text-[15px]"
        />
        <InputError message={inputError.last_name} />
      </div>

      <div className="mt-10 flex min-h-[125px] items-center gap-4 rounded-[24px] border border-[#E2E2E2] bg-[#F3F3F3]/50 p-6">
        <ShieldIcon
          className="h-12 w-12 shrink-0"
          rect="#00C2A833"
          fill="#009B87"
        />
        <div>
          <p className="font-manrope text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#3C4A46]/70">
            Secure identity
          </p>
          <p className="mt-1 font-manrope text-sm leading-5 text-[#3C4A46]/70">
            Your legal name is required for regulatory compliance secure
            banking.
          </p>
        </div>
      </div>

      <Button
        className="mt-6 h-14 rounded-2xl font-plusJakartaSans text-[15px] font-bold"
        onClick={handleClick}
        endIcon={<ArrowRightIcon className="h-5 w-5" />}
      >
        Continue
      </Button>

      <p className="mx-auto mt-6 max-w-[320px] text-center font-manrope text-sm leading-6 text-[#6F7A76]">
        By continuing, you agree to our{" "}
        <span className="font-bold text-[#006B5C]">
          Identity Verification Policy
        </span>
      </p>
    </OnboardingSplitShell>
  );
};
