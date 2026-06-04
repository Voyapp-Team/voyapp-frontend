"use client";

import BusinessSignUpForm from "../components/BusinessSignUpForm";
import BusinessSignUpBanner from "../components/BusinessSignUpBanner";
import { ArrowLeftIcon } from "@/src/components/ui/Icons";
import { useRouter } from "next/navigation";

export default function BusinessSignUpScreen() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className="flex relative min-h-screen bg-white ">
            <button
                type="button"
                onClick={handleBack}
                className="flex absolute top-4 left-4 h-10 w-10 items-center justify-center rounded-full bg-white text-[#006B5C] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD]"
                aria-label="Go back"
            >
                <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <BusinessSignUpBanner />
            <BusinessSignUpForm />

            {/* Business Sign Up Form goes here */}
        </div>
    )
}