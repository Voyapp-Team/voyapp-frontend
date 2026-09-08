"use client";

import { useOnboardingContext } from "../context/OnboardingContext";

export default function useOnboarding() {
  const {
    onboardingData,
    updateOnboarding,
    clearOnboarding,
  } = useOnboardingContext();

  return {
    onboardingData,
    updateOnboarding,
    clearOnboarding,
  };
}