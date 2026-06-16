"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RequestPaymentForm from "../components/RequestPaymentForm";

export default function RequestPaymentScreen() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Handle form submission
      console.log("Request payment data:", formData);
      // TODO: Add API call here
      
      // Redirect to success page or dashboard
      // router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting request payment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF8F8] py-8 px-4">
      <div className="flex flex-col items-center w-full max-w-[720px] m-auto bg-white rounded-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden">
        <RequestPaymentForm onSubmit={handleSubmit} isLoading={isSubmitting} />
      </div>
    </div>
  );
}
