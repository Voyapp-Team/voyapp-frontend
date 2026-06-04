"use client"

import BUTTON from "@/src/components/ui/Button";
import { ArrowRightIcon } from "@/src/components/ui/Icons";
import { useState } from "react";
import inputValidation from "../utils/inputValidation";
import InputError from "@/src/components/ui/InputError";
export default function BusinessSignUpForm() {

    const [formData, setFormData] = useState({
        businessName: "",
        name: "",
        email: "",
        password: "",
        country: "",
        terms: false, 
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = inputValidation(formData);
        if(Object.keys(validationResult).length > 0){
            // Handle validation errors (e.g., display error messages)
            setFormErrors(validationResult);
            return;
        }
        // Proceed with form submission (e.g., API call)
        console.log("Form submitted successfully", formData);
    }


    return (
        <div className="flex w-full w-[50%] items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col  w-full max-w-[448px] m-auto my-10 rounded-[50px]  px-[24px] pt-[98px] pb-[48px]">
            <h2 className="text-[30px] leading-9 font-plusJakartaSans font-extrabold text-[#1C1B1B] mb-4">Create your account</h2>
            <p className=" font-manrope text-[16px] leading-6 text-[#3C4A46] mb-8">Start accepting payments in minutes.</p>
            <form className="w-full" onSubmit={handleSubmit}   >
                <div className="mb-4">
                    <label htmlFor="businessName" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Business Name</label>
                    <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full text-[#1C1B1B] bg-[#F6F3F2] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="Your business name" />
                    <InputError message={formErrors.businessName}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#F6F3F2] text-[#1C1B1B] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="Your full name" />
                    <InputError message={formErrors.name} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#F6F3F2] text-[#1C1B1B] font-manrope text-[16px] leading-5  rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="Enter your email" />
                    <InputError message={formErrors.email} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5 text-[#1C1B1B]  rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="Create a password" />
                    <InputError message={formErrors.password} />
                </div>
                <div className="mb-6">
                    <label htmlFor ="country" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Country</label>
                    <select id="country" name="country" value={formData.country} onChange={handleChange} className="w-full bg-[#F6F3F2] font-manrope text-[16px] leading-5  text-[#1C1B1B]   rounded-xl shadow-[0_0_0_1_#BBCAC44D    ] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]">
                        <option value="">Select your country</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                    </select>
                    <InputError message={formErrors.country} />
                </div>

                <div className="flex items-start ">
                    <input type="checkbox" id="terms" name="terms" checked={formData.terms}  onChange={handleChange} className="mr-2 accent-[#00C2A8]" />
                    <label htmlFor="terms" className="text-[#3C4A46] text-[12px] leading-5">
                        By creating an account, you agree to our <a href="#" className="text-[#006B5C] font-semibold">Terms of Service</a> and <a href="#" className="text-[#006B5C] font-semibold">Privacy Policy</a>.
                    </label>
                </div>
                <InputError message={formErrors.terms}/>

                <BUTTON type="submit" className="w-full  mt-6 rounded-xl font-plusJakartaSans text-[15px] font-bold" endIcon={<ArrowRightIcon className="h-5 w-5" />}>
                    Create Account
                </BUTTON>
            </form>
            <p className="text-[#3C4A46] mt-6 mb-10 text-[14px] text-center leading-5">
                Already have an account? <a href="#" className="text-[#006B5C] font-semibold">Log in</a>
            </p>
            <a href="#" className="text-[#006B5C] text-center font-manrope font-medium text-[14px] leading-5">Help Center</a>
        </div>
        </div>
    );
}