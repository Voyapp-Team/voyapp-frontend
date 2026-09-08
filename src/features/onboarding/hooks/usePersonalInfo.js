"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {submitPersonalInfo} from "../services/onboardingService";

export default function usePersonalInfo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const savePersonalInfo = async (formData) => {
    try {
      setLoading(true);
      setError("");

      const response = await submitPersonalInfo(formData);
      console.log("Personal Info res:  ", response)
      router.push("/onboarding/category");

    } catch (err) {
      setError(
        err.response?.data?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    savePersonalInfo,
  };
}