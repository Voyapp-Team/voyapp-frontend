"use client";

import BusinessSignUpForm from "../components/BusinessSignUpForm";
import BusinessSignUpBanner from "../components/BusinessSignUpBanner";
import { ArrowLeftIcon } from "@/src/components/ui/Icons";
import { useRouter } from "next/navigation";
import Modal from "@/src/components/ui/Modal";
import { useState } from "react";

export default function BusinessSignUpScreen() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBack = () => {
        router.back();
    };

    return (
        <main className="flex relative min-h-screen bg-white ">
            <button
                type="button"
                onClick={handleBack}
                className="flex absolute top-4 left-4 h-10 w-10 items-center justify-center rounded-full bg-white text-[#006B5C] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD]"
                aria-label="Go back"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <BusinessSignUpBanner />
            <BusinessSignUpForm
              setIsModalOpen={setIsModalOpen}
            />

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className= "bg-[#FFFFFF1A] border border-white/20  border-l-white border-b-white  shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-[586px]"  buttonClassName='hidden'>
                    <div className="p-2 ">
                        <h3 className="text-[20px] text-center  font-bold font-montserrat leading-7  mb-10">Check your Email-inbox for a verification link</h3>
                        <img src="/onboarding/email-image.svg" alt="check email for verification" className="mx-auto mb-4" />
                        <p className="text-[16px] text-center font-montserrat leading-7 mb-6">Tap the link in the email to verify your account.</p>
                    </div>
                </Modal>
            )}
        </main>
    )
}