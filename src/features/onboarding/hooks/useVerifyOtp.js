"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setOnboardingSession } from "../../auth/authSlice";
import useOnboarding from "./useOnboarding";

import { verifyOtp, getIdToken} from "../services/firebaseService";
import { useAppDispatch } from "@/src/store/hooks";
import { firebaseVerify } from "../services/onboardingService";

export default function useVerifyOtp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { onboardingData } = useOnboarding();

  const verifyCode = async (otp) => {
  try {
    console.log("verifyCode() started");

    setLoading(true);
    setError("");

    console.log("confirmationResult:", onboardingData.confirmationResult);

    const firebaseUser = await verifyOtp(
      onboardingData.confirmationResult,
      otp
    );

    console.log("Firebase user:", firebaseUser);

    const idToken = await getIdToken(firebaseUser);

    console.log("ID Token:", idToken);

    const response = await firebaseVerify(idToken);
    
    dispatch(
      setOnboardingSession({
        onboardingToken: response.data.onboarding_token,
      })
    );

    console.log("Dispatch payload:", response.data.onboarding_token)

    console.log("Backend response:", response);

    router.push("/onboarding/profileSetUp");
  } catch (err) {
    console.error("verifyCode error:", err);
    console.error("Code:", err.code);
    console.error("Message:", err.message);

    setError(err.message);
  } finally {
    setLoading(false);
  }

  };

  return {
    loading,
    error,
    verifyCode,
  };
}