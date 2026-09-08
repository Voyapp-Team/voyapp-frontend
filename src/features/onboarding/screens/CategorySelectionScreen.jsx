"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import useSaveUserType from '../hooks/useSaveUserType';
import Button from '@/src/components/ui/Button';
import {
  ArrowRightIcon,
  Camera,
  Code,
  Options,
  Palette,
  Sparkles,
  TextIcon,
} from '@/src/components/ui/Icons';

import OnboardingSplitShell from '../components/common/OnboardingSplitShell';

const CATEGORIES = [
  { id: "Designer", label: "Designer", icon: Palette },
  { id: "Developer", label: "Developer", icon: Code },
  { id: "Writer", label: "Writer", icon: TextIcon },
  { id: "Creator", label: "Creator", icon: Sparkles },
  { id: "Photographer", label: "Photographer", icon: Camera },
  { id: "Other", label: "Other", icon: Options },
];

export const CategorySelectionScreen = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("Designer");
  const {loading, saveUserType, error} = useSaveUserType();


  const handleSubmit = async () => {
    console.log("category:  ", selected)
    
      await saveUserType("freelancer")
    

  }

  return (
    <OnboardingSplitShell
      imgSrc="/onboarding/categorySlideIllustration.svg"
      imgAlt="Business man working on a laptop in an office with colleagues"
      currentStep={3}
      totalSteps={5}
      shellClassName="lg:min-h-[856px]"
      progressClassName="lg:mt-[54px]"
      contentClassName="mt-14 max-w-[382px]"
      backHref="/onboarding/profileSetUp"
    >
      <div>
        <h1 className="font-montserrat text-[30px] font-semibold leading-[1.16] text-[#1C1B1B] sm:text-[34px]">
          Select your category
        </h1>
        <p className="mt-4 font-manrope text-[15px] leading-6 text-[#3C4A46]">
          Choose the path that best defines your creative or professional
          journey.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4">
        {CATEGORIES.map((category) => {
          const isSelected = selected === category.id;
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelected(category.id)}
              className={`flex min-h-[132px] flex-col items-start gap-5 rounded-2xl p-5 text-left font-manrope text-sm font-bold text-[#363434] transition hover:-translate-y-0.5 ${
                isSelected
                  ? "border-2 border-[#00C2A8]/40 bg-white"
                  : "border-2 border-transparent bg-[#F6F3F2]"
              }`.trim()}
              aria-pressed={isSelected}
            >
              <Icon
                className="h-12 w-12"
                rect={isSelected ? "#00C2A81A" : "#E5E2E1"}
                fill={isSelected ? "#009B87" : "#363434"}
              />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      <Button
        className="mt-11 h-14 rounded-2xl font-plusJakartaSans text-[15px] font-bold"
        onClick={handleSubmit}
        endIcon={<ArrowRightIcon className="h-5 w-5" />}
      >
        {loading? "Loading" : "Continue"}
      </Button>
    </OnboardingSplitShell>
  );
};
