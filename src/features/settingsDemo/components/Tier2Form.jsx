"use client";
import KYCInput from "./common/KYCInput";
import Button from "@/src/components/ui/Button";
import { useState } from "react";

export default function Tier2Form(){
    const [bvn, setBvn] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }

    return(
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full w-full ">
           <KYCInput
                label="BVN"
                name="bvn"
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={bvn}
                onChange={(e) => setBvn(e.target.value)}
            />
            <KYCInput
                label="ACCOUNT NUMBER"
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                name="accountNumber"
                value={accountNumber}   
                onChange={(e) => setAccountNumber(e.target.value)}
            />

            <Button
                type="submit"
                className="bg-[#006B5C] text-white w-full py-3 rounded-lg mt-10"
            >
                Done
            </Button> 
      </form>
    )
} ;