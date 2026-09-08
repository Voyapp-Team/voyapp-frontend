"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { submitUserType } from "../services/onboardingService";

export default function useSaveUserType() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const saveUserType = async (userType) => {
    try {
      setLoading(true);
      setError("");

      const response = await submitUserType(userType);

      console.log("User type response:", response);

      router.push("/onboarding/username");

      return response;
    } catch (err) {
        console.log(err.response?.data);
      console.error("saveUserType error:", err);

       console.error("SaveUser error:", err);
        console.error("Code:", err.code);
        console.error("Message:", err.message);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong."
      );

      throw err;
    } finally {
      setLoading(false);
      console.log(error)
    }
  };

  return {
    loading,
    error,
    saveUserType,
  };
}