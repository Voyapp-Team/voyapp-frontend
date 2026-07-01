"use client"

import BUTTON from "@/src/components/ui/Button";
import { CheckedCircleIcon, ArrowRightIcon } from "@/src/components/ui/Icons";

import InputError from "@/src/components/ui/InputError";
import { useRouter } from "next/navigation";
import {ArrowLeftIcon} from "@/src/components/ui/Icons";



export default function CreateCrewForm({
  conditions,
  usernameRequirement,
  usernameSuggestions,
  onSubmit,
  fileInputRef,
  handleChange,
  formData,
  setFormData,
  formErrors
  }) {

    const router = useRouter();

    
    return (
        <div className="flex w-full max-w-[480px] items-center justify-center min-h-screen bg-white md:rounded-[50px]  pt-[98px] pb-[48px] px-6">
            <div className="flex flex-col relative w-full max-w-[432px]   ">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex absolute top-[-60px] left-0 h-10 w-10 items-center justify-center rounded-full bg-white text-[#006B5C] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD]"
                    aria-label="Go back"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
               </button>

                <h2 className="text-[30px] leading-9 font-plusJakartaSans font-extrabold text-[#1C1B1B] mb-4">Create Your Crew</h2>
                <p className=" font-manrope text-[16px] leading-6 text-[#3C4A46] mb-8">Set up a shared wallet. Get paid together. Splits happen automatically.</p>
                
                <form className="w-full" onSubmit={onSubmit}   >

                    {/* Image upload field can be added here */}

                    <div className="bg-white  p-6 flex flex-col items-center gap-3 ">
                        <div 
                            className=" w-[80px] h-[80px] rounded-full flex items-center justify-center cursor-pointer bg-[#F6F3F2]"
                            onClick={() => fileInputRef.current.click()}
                        
                        >
                            {/* Profile Image */}
                            <img
                                src="/placeholder-profile.png" // Replace with actual image source 
                                alt="Profile"
                                className=" hidden w-28 h-28 rounded-full object-cover ring-4 ring-white shadow"
                            />

                            {/* Camera Icon */}
                            <img
                                src="/onboarding/upload-photo-icon.svg" 
                                alt="Upload Photo"
                                
                            />


                            {/* Hidden Input */}
                            <input
                                ref={fileInputRef}
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </div>


                        <button
                            alt="Add Crew Photo"
                            className="block  w-fit cursor-pointer font-manrope font-bold text-[13px] leading-5 text-[#006B5C] mb-2"
                            onClick={() => fileInputRef.current.click()}
                        >
                            Add Crew Photo
                        </button>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="crewName" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Crew Name</label>
                        <input type="text" id="crewName" name="crewName" value={formData.crewName} onChange={handleChange} className="w-full text-[#1C1B1B] bg-[#F6F3F2] font-manrope text-[16px] leading-5 rounded-xl shadow-[0_0_0_1_#BBCAC44D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#006B5C] placeholder:text-[#3C4A4680]" placeholder="e.g Studio Kali" />
                        <InputError message={formErrors.crewName}/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block font-manrope font-semibold text-[14px] leading-5 text-[#1C1B1B] mb-2">Crew Username</label>
                        <div className="relative mb-1 flex items-center ">
                            <span className="pointer-events-none rounded-l-xl px-3 bg-[#EBE7E780] inline-flex items-center justify-between absolute top-0 bottom-0 left-0 font-manrope  text-[16px] font-bold leading-7 text-[#3C4A46]">
                            voya.me/
                            </span>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="block py-3 w-full rounded-xl  bg-[#F6F3F2] pl-[104px] pr-12 font-manrope text-[16px]  text-[#2C2C2C] outline-none placeholder:text-[#DCD9D9] focus:border-[var(--color-brand-accent)]"
                            />
                            {formData ? (
                            <span
                                className={`absolute right-4 flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] font-bold ${
                                conditions.characterCount && !formErrors.username
                                    ? "border-[#006B5C] bg-[#ffffff] text-[#006B5C]"
                                    : "border-[#BA1A1A] text-[#BA1A1A]"
                                }`.trim()}
                            >
                                {conditions.characterCount && !formErrors.username ? "✔" : "!"}
                            </span>
                            ) : null}
                        </div> 
                        <InputError message={formErrors.username} />     
                    </div>

                    <div className="mt-10">
                        <p className="font-manrope text-[13px] font-semibold uppercase leading-5 text-[#3C4A46]/70">
                        Suggested for you
                        </p>
                        <div className="mt-2 space-y-2">
                            {usernameSuggestions.map((suggestion) => (
                                <button
                                key={suggestion}
                                type="button"
                                className="flex h-[58px] w-full max-w-[284px] items-center justify-between rounded-xl border border-[#BBCAC4]/10 bg-white/50 px-4 font-manrope text-sm font-medium text-[#2C2C2C] transition hover:border-[#00C2A8]/30"
                                onClick={() => {
                                setFormData((prevData) => ({
                                    ...prevData,
                                    username: suggestion,
                                }))
                                
                                }}
                                >
                                <span>{suggestion}</span>
                                <span className="flex h-4 w-4 items-center justify-center text-lg leading-none text-[#41DDC2]">
                                    +
                                </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-9 flex flex-wrap gap-x-4 gap-y-3">
                        {usernameRequirement.map((req, index) => {
                            const isMet = conditions[Object.keys(conditions)[index]];
                
                            return (
                            <div key={req} className="flex items-center gap-2">
                                {isMet ? (
                                <CheckedCircleIcon className="h-4 w-4" />
                                ) : (
                                <span className="h-4 w-4 rounded-full border border-[#3C4A46]/60" />
                                )}
                                <p className="font-manrope text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-[#3C4A46]/60">
                                {req}
                                </p>
                            </div>
                            );
                        })}
                    </div>
                        
                    <BUTTON type="submit" className="w-full  mt-6 rounded-xl font-plusJakartaSans text-[15px] font-bold" endIcon={<ArrowRightIcon className="h-5 w-5" />}>
                        Create Crew 
                    </BUTTON>
                </form>
                
            </div>
        </div>
    );
}