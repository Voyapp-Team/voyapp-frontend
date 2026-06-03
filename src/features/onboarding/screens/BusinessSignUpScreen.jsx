"use client";

import BusinessSignUpForm from "../components/BusinessSignUpForm";

export default function BusinessSignUpScreen() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-0 sm:p-8 lg:p-12">
            <BusinessSignUpForm />

            {/* Business Sign Up Form goes here */}
        </div>
    )
}