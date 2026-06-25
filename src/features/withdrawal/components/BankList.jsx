"use client"

import { useState } from "react";
import useDebounce from "@/src/hooks/useDebounce";

export default function BankList ({onClickBankName}){
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedValue = useDebounce(searchTerm.toLowerCase().trim())
    
    const suggestedBanks = [
        { name: "GTBank", code: "058" },
        { name: "Access Bank", code: "044" },
    ];

    const banks = [
        { name: "Access Bank", code: "044" },
        { name: "GTBank", code: "058" },
        { name: "First Bank", code: "011" },
        { name: "UBA", code: "033" },
        { name: "Zenith Bank", code: "057" },
        { name: "Opay", code: "023" },
        { name: "Moniepoint", code: "071" },
        { name: "Fidelity", code: "083" },
        { name: "Eco-bank", code: "091" }
    ];

    const banksList = debouncedValue
    ? banks.filter((bank) =>
        bank.name.toLowerCase().includes(debouncedValue)
        )
    : banks;
    
     
    
    return(
        <div className="max-w-267  bg-[#FFFFFF] rounded-[30px] py-4 px-10 flex flex-col h-[85vh] max-h-[700px]">
            <div className="relative mb-8">
                <img src="/search-icon.svg" alt="Search Icon" className="absolute left-10 top-3" />
                <input  
                    type="text"
                    value={searchTerm} 
                    onChange= {(e) => setSearchTerm(e.target.value)}
                    className="bg-[#FAFAFA] w-full font-montserrat border border-[#E9E9E9] py-4 pr-2 pl-22 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#00C2A8] "
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                <div>
                    <h2 className="mb-4 font-manrope font-extrabold text-[16px] leading-6 text-[#666666] ">SUGGESTIONS</h2>
                    
                    <div className="flex flex-col gap-4">
                    {suggestedBanks.map(bank => (
                    
                        <div 
                          key={bank.code} 
                          className="flex items-center gap-2 cursor-pointer "
                          onClick={() => onClickBankName(bank.name)}
                        >
                            <span className="bg-[#D9D9D9] w-14.5 h-14.5 rounded-full"></span>
                            <p className="font-montserrat font-bold text-[18px] leading-7 text-[#515151]">{bank.name}</p>
                        </div>
                    
                    ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className=" mb-4 font-manrope font-extrabold text-[16px] leading-6 text-[#666666] ">OTHERS</h2>
                    
                    <div className="flex flex-col gap-4">
                    {banksList.length === 0 ? (
                        <p className="font-montserrat text-center font-bold text-[18px] leading-7 text-[#DA0000]">Bank not found</p>
                    )
                    : (banksList.map(bank => (
                        
                        <div 
                         key={bank.code} 
                         className="flex items-center gap-2 cursor-pointer"
                         onClick={() =>  onClickBankName(bank.name)}
                        >
                            <span className="bg-[#D9D9D9] w-14.5 h-14.5 rounded-full"></span>
                            <p className="font-montserrat font-bold text-[18px] leading-7 text-[#515151]">{bank.name}</p>
                        </div>
                        
                    )))}
                    </div>
                </div>
            </div>

        </div>
    )
}