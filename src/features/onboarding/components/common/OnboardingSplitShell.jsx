"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "../../../../components/ui/Icons";
import ProgressSteps from "../../../../components/ui/ProgressSteps";

export default function OnboardingSplitShell({
  children,
  imgSrc = "/onboarding/signupSideIllustration.svg",
  imgAlt = "Voya onboarding preview",
  currentStep = 0,
  totalSteps = 5,
  contentClassName = "",
  progressClassName = "",
  shellClassName = "",
  panelClassName = "",
  imageClassName = "",
  backHref,
}) {
  const router = useRouter();
  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
      return;
    }

    router.back();
  };

  const backButton = (
    <button
      type="button"
      onClick={handleBack}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#006B5C] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD]"
      aria-label="Go back"
    >
      <ArrowLeftIcon className="h-5 w-5" />
    </button>
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-6 sm:px-6 lg:px-8">
      <section
        className={`relative flex min-h-[calc(100vh-3rem)] w-full max-w-[958px] overflow-hidden rounded-[28px] border border-[#E1E1E1] bg-white lg:min-h-[685px] lg:rounded-[50px] ${shellClassName}`.trim()}
      >
        <div className="absolute left-5 top-5 z-20 lg:hidden">{backButton}</div>

        <aside
          className={`relative hidden w-[47.75%] shrink-0 overflow-hidden bg-white lg:block ${imageClassName}`.trim()}
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            unoptimized
            sizes="457px"
            className="object-cover"
          />
          <div className="absolute left-11 top-[26px] z-20">{backButton}</div>
        </aside>

        <div
          className={`flex w-full flex-col bg-white px-6 py-8 sm:px-10 lg:flex-1 lg:px-[58px] lg:py-[38px] ${panelClassName}`.trim()}
        >
          <ProgressSteps
            currentStep={currentStep}
            totalSteps={totalSteps}
            className={`mx-auto w-full max-w-[382px] gap-[18px] sm:gap-[22px] ${progressClassName}`.trim()}
            stepClassName="h-2.5 rounded-full"
          />

          <div className={`mx-auto mt-14 w-full max-w-[382px] sm:mt-16 ${contentClassName}`.trim()}>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
