"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useOnboarding from "./useOnboarding";
import { sendOtp } from "../services/firebaseService";


export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const { updateOnboarding } = useOnboarding();

  const requestOtp = async (phoneNumber) => {
    try {
      setLoading(true);
      setError("");

      const confirmationResult = await sendOtp(phoneNumber);

      updateOnboarding({
        phoneNumber,
        confirmationResult,
      });

      console.log("confirmationResult after update:", confirmationResult);

      router.push("/onboarding/verify");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    requestOtp,
  };
}