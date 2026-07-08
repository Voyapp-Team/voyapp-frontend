"use client"

import { useRef} from "react";

export default function UploadDocument(){
    const fileInputRef = useRef(null);
    const handleChange = ()=>{

    }
    return(
        <div 
            className=" flex flex-col gap-4 w-full py-14 rounded-[24px] border-[2px] border-[#E1E1E1]  cursor-pointer bg-[linear-gradient(180deg,_#006B5C33_0%,_#FFFFFF_100%)]  m-auto  mb-6"
            onClick={() => fileInputRef.current.click()}
    
        >
            

            {/* Upload Icon */}
            <div className="flex w-[64px] h-[64px] items-center justify-center bg-[#65FADE] rounded-full m-auto shadow-[0px_1px_2px_0px_#0000000D]">
                <img
                    src="/upload-document-icon.svg" 
                    alt="Upload Document"
                    
                />
            </div>

            <p className="font-montserrat font-bold text-[18px] leading-7 text-center text-[#006B5C]">Proof of Address</p>
            <p className=" w-fit m-auto font-manrope text-[14px] leading-5 text-[#3C4A46]">Click to browse and upload document</p>

            {/* Hidden Input */}
            <input
                ref={fileInputRef}
                id="document"
                name="document"
                type="file"
                accept="document/*"
                onChange={handleChange}
                className="hidden"
            />
        </div>
    )
}