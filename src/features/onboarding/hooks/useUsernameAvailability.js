"use client"
import { useState } from "react";
import { checkUsername } from "../services/onboardingService";


export default function useUsernameAvailability() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [error, setError] = useState("");

  const checkAvailability = async (username) => {
    if (!username.trim()) {
      setSuggestions(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await checkUsername(username);

      console.log("Availableresponse", response.data.suggestions);

      setSuggestions(response.data.suggestions);

      return response; 

    } catch (err) {
      console.log(err.response?.data);
      setSuggestions(false);
      
      setError(
        err.response?.data?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    suggestions,
    error,
    checkAvailability,
  };
}