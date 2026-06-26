"use client"

import { useRef} from "react";

export default function UploadProfilePic(){
    const fileInputRef = useRef(null);
    const handleChange = ()=>{

    }
    return(
        <div 
                className="relative w-43 h-43 rounded-full  cursor-pointer bg-[#F6F3F2] m-auto mb-6"
                onClick={() => fileInputRef.current.click()}
            
            >
                {/* Profile Image */}
                <img
                    src="/profile-pic.svg" // Replace with actual image source 
                    alt="Profile"
                    className="rounded-full object-cover"
                />

                {/* Camera Icon */}
                <div className="absolute right-6 bottom-1 w-[23.67px] h-[22.5px] flex justify-center items-center rounded-full bg-[#006B5C] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)]">
                    <img
                        src="/upload-img-icon2.svg" 
                        alt="Upload Photo"
                        
                    />
                </div>


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
    )
}