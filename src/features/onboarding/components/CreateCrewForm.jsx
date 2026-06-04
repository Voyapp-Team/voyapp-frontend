"use client"

import BUTTON from "@/src/components/ui/Button";
import { ArrowRightIcon } from "@/src/components/ui/Icons";
import { useState } from "react";
import inputValidation from "../utils/inputValidation";
import InputError from "@/src/components/ui/InputError";
export default function CreateCrewForm() {

    const [formData, setFormData] = useState({
        image: null,
        crewName: "",
        username: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === "file" ? files[0] : value;
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
        
        <div className="flex flex-col  w-full max-w-[480px] items-center justify-center m-auto my-10 rounded-[50px] min-h-screen bg-white ">
            <h2 className="text-[30px] leading-9 font-plusJakartaSans font-extrabold text-[#1C1B1B] mb-4">Create your account</h2>
            <p className=" font-manrope text-[16px] leading-6 text-[#3C4A46] mb-8">Start accepting payments in minutes.</p>
            <form className="w-full" onSubmit={handleSubmit}   >

                {/* Image upload field can be added here */}

                <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} className="mb-4 w-full text-[#1C1B1B] bg-[#F6F3F2] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C]" />
                
                <div className="mb-4">
                    <label htmlFor="crewName" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Crew Name</label>
                    <input type="text" id="crewName" name="crewName" value={formData.crewName} onChange={handleChange} className="w-full text-[#1C1B1B] bg-[#F6F3F2] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="Your crew name" />
                    <InputError message={formErrors.crewName}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full bg-[#F6F3F2] text-[#1C1B1B] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="Choose a username" />
                    <InputError message={formErrors.username} />
                </div>
                    
                <BUTTON type="submit" className="w-full  mt-6 rounded-xl font-plusJakartaSans text-[15px] font-bold" endIcon={<ArrowRightIcon className="h-5 w-5" />}>
                    Create Crew 
                </BUTTON>
            </form>
            
        </div>
        
    );
}