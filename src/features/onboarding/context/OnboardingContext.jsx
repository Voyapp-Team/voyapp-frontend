"use client";

import { createContext, useContext, useState, useEffect } from "react";

const OnboardingContext = createContext(null);

const initialState = {
  phoneNumber: "",
  identifier: "",
  confirmationResult: null,

  personalInfo: null,

  userType: "",

  username: "",
};

export function OnboardingProvider({ children }) {
    
    const [onboardingData, setOnboardingData] = useState(initialState);

   

    const updateOnboarding = (updater) => {
        setOnboardingData((prev) => {
            const updates =
            typeof updater === "function"
                ? updater(prev)
                : updater;

            return {
            ...prev,
            ...updates,
            };
        });
    };

    const clearOnboarding = () => {
        setOnboardingData(initialState);
    };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateOnboarding,
        clearOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      "useOnboardingContext must be used within OnboardingProvider"
    );
  }

  return context;
}