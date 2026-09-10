import { OnboardingProvider } from "@/src/features/onboarding/context/OnboardingContext";

export default function OnboardingLayout({ children }) {
  return (
    <OnboardingProvider>
      {children}
    </OnboardingProvider>
  );
}