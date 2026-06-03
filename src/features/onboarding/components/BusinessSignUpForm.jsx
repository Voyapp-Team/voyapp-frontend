"use client"

import BUTTON from "@/src/components/ui/Button";
import { ArrowRightIcon } from "@/src/components/ui/Icons";

export default function BusinessSignUpForm() {
    return (
        <div className="flex flex-col items-center w-full max-w-[448px] m-auto my-10 bg-white rounded-[50px]  px-[24px] pt-[98px] pb-[48px]">
            <h2 className="text-[30px] leading-9 font-plusJakartaSans font-extrabold text-[#1C1B1B] mb-4">Create your account</h2>
            <p className=" font-manrope text-[16px] leading-6 text-[#3C4A46] mb-8">Start accepting payments in minutes.</p>
            <form className="w-full">
                <div className="mb-4">
                    <label htmlFor="businessName" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Business Name</label>
                    <input type="text" id="businessName" name="businessName" className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]" placeholder="Your business name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]" placeholder="Your full name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5  rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5  rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]" placeholder="Create a password" />
                </div>
                <div className="mb-6">
                    <label htmlFor ="country" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Country</label>
                    <select id="country" name="country" className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5    rounded-xl shadow-[0_0_0_1_#BBCAC44D    ] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]">
                        <option value="">Select your country</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                    </select>
                </div>

                <div className="flex items-center mb-6">
                    <input type="checkbox" id="terms" name="terms" className="mr-2" />
                    <label htmlFor="terms" className="text-[#3C4A46] text-[12px] leading-5">
                        By creating an account, you agree to our <a href="#" className="text-[#006B5C] font-semibold">Terms of Service</a> and <a href="#" className="text-[#006B5C] font-semibold">Privacy Policy</a>.
                    </label>
                </div>

                <BUTTON type="submit" className="w-full h-[52px] rounded-xl font-plusJakartaSans text-[15px] font-bold" endIcon={<ArrowRightIcon className="h-5 w-5" />}>
                    Create Account
                </BUTTON>
            </form>
            <p className="text-[#3C4A46] mb-10 text-[14px] leading-5">
                Already have an account? <a href="#" className="text-[#006B5C] font-semibold">Log in</a>
            </p>
            <a href="#" className="text-[#006B5C] font-manrope font-medium text-[14px] leading-5">Help Center</a>
        </div>
    );
}