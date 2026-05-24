"use client";

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Camera,
  Code,
  Options,
  Palette,
  Sparkles,
  TextIcon,
} from '@/src/components/ui/Icons';
//import ProgressSteps from '@/app/components/ui/ProgressSteps';
import ProgressSteps from '@/src/components/ui/ProgressSteps';

// 1. Define your data outside the component or in a separate config file
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
            src="/onboarding/categorySlideIllustration.svg"
            alt="Business man working on a laptop in an office, with colleagues."
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
        </div>
        {/* right profile form */}
        <div className="flex flex-col w-full px-8 py-7 lg:w-[45%] gap-y-2.5  h-screen">
          <ProgressSteps currentStep={3} totalSteps={5} />
          <div className="flex flex-col gap-y-1 mt-2 mb-3">
            <h1 className="font-bold text-2xl tracking-tight md:text-3xl text-[#1a1a1a]">
              Select your category
            </h1>
            <p className="text-base text-gray-600 whitesapce-wrap sm:w-[70%]">
              Choose the path that best defines your creative or professional
              journey.
            </p>
          </div>
          {/* category options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CATEGORIES?.map((category) => {
              const isSelected = selected === category.id;
              const Icon = category.icon;

              return (
                <div
                  key={category.id}
                  onClick={() => setSelected(category.id)}
                  className={`flex flex-col gap-2 cursor-pointer hover:shadow hover:shadow-black/10  text-black/80 font-bold text-sm sm:text-base p-4 rounded-xl ${selected === category.id ? "bg-white border border-(--color-brand-border) shadow shadow-black/10" : "bg-[#F6F3F2]"}`}
                >
                  <Icon
                    className="w-9 h-9 "
                    rect={isSelected ? "#009b8625" : "#E5E2E1"}
                    fill={isSelected ? "#009b87" : "#363434"}
                  />
                  <span className="font-bold text-sm sm:text-base text-black/80">
                    {category.label}
                  </span>
                </div>
              );
            })}
          </div>
          <Button
            className="tracking-widest font-extralight cursor-pointer mt-2.5"
            onClick={() => router.push("/onboarding/username")}
            endIcon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Continue
          </Button>
        </div>
      </div>
    </main>
  );
};
