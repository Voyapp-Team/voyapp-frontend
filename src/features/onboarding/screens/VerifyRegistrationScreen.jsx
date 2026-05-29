"use client";

import OnboardingSplitShell from "../components/common/OnboardingSplitShell";
import OtpVerification from "../components/common/OtpVerification";

export default function VerifyRegistrationScreen() {
  return (
    <OnboardingSplitShell
      imgSrc="/onboarding/verifySideIllustration.svg"
      imgAlt="Business professionals in a meeting room"
      currentStep={1}
      totalSteps={5}
      shellClassName="lg:min-h-[685px]"
      progressClassName="lg:mt-[54px]"
      contentClassName="mt-14 max-w-[382px]"
      backHref="/onboarding/contact"
    >
      <OtpVerification />
    </OnboardingSplitShell>
  );
}
