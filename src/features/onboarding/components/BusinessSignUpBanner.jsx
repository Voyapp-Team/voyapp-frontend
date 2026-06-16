"use client";
import Image from "next/image";

export default function BusinessSignUpBanner() {    
    return (
        <div className=" hidden min-[888px]:flex w-full w-[50%] bg-[#006B5C]  p-8 min-h-screen  flex-col items-center justify-center">
            <div className="flex flex-col  max-w-[448px]">
                <div className="flex items-center gap-2 mb-4 py-1 px-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-full w-[232.02px]">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#65FADE]"></span>
                    <p className="font-manrope font-semibold text-[12px] leading-4 tracking-[0.6px] uppercase">TRUSTED BY 10K+ MERCHANTS</p>
                </div>
                <h1 className="text-[60px] leading-[60px] tracking-[-1.5px] font-plusJakartaSans font-extrabold  text-white mb-6">Start accepting payments in minutes</h1>
                <p className="font-manrope text-white text-[16px] md:text-[20px] leading-7 mb-8">Join thousands of businesses that trust Voya to power their globalpayments.</p>
                <img
                    src="/onboarding/business-signup-banner-img.png"
                    alt="Business partnership illustration"
                    className="object-cover"
                />

                <p className="mt-14 text-[14px] leading-5 font-manrope text-[#FFFFFF80]">© 2024 Voya Financial. All rights reserved.</p>
            
            </div>
        </div>
    )
}