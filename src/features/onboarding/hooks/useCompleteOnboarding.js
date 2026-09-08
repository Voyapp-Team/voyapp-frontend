"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  completeUsername,
} from "../services/onboarding.service";

export default function useCompleteOnboarding() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const finishOnboarding = async (username) => {
    try {
      setLoading(true);
      setError("");

      await completeUsername(username);

      router.push("/dashboard");

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
    finishOnboarding,
  };
}