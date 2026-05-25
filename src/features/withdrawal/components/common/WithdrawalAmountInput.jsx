"use client";

import { formattedCurrency } from "../../utils/formattedCurrency";
import InputError from "@/src/features/onboarding/components/common/InputError";

export default function WithdrawalAmountInput({isCryto, cryptoBalance, crytoType, amount, setAmount, inputError}) {
   
    const handleAmountChange = (e) => {
        const raw = e.target.value.replace(/,/g, "");

        if (/^\d*\.?\d*$/.test(raw)) {
            setAmount(raw);
        }
    };  

    return (
        <div className=" flex flex-col  w-full max-w-[448px] bg-white md:rounded-[50px] ">
            <h2 className=" text-[30px] leading-[32px] tracking-[-0.75px] font-extrabold font-plusJakartaSans text-[#1C1B1B] mb-2">How much do you want to withdraw?</h2>
            <div className="flex items-center gap-4">
                <p className="text-[16px] leading-6 font-manrope text-[#3C4A46] font-semibold"> Available balance: { isCryto ? formattedCurrency(cryptoBalance, "en-US", "USD") : "₦1,914,772.00"}  </p>
                {isCryto && <p className="text-[16px] leading-6 font-manrope text-[#3C4A46] font-semibold uppercase">{crytoType}</p>}
            </div>
            {/* Withdrawal amount input field */}
            <div className=" mt-13 w-full max-w-[400px]  flex items-end gap-6 ">
               <span className="font-plusJakartaSans font-extrabold text-[36px] leading-[40px] text-[#006B5C]"  alt="Naira Icon">{isCryto ? "$" : "₦"}</span> 
                <input 
                    type="text"
                    inputMode="decimal"
                    pattern="[0-9]*"
                    id="withdrawalAmount"
                    placeholder="Enter amount"
                    value={amount? Number(amount).toLocaleString()   : ""}
                    onChange={handleAmountChange}
                    className="text-center w-full text-[40px] leading-[100%] caret-[#006B5C] font-plusJakartaSans font-bold text-[#000006] placeholder:text-[#76797f5e] focus:ring-0 focus:outline-none"
                />
                
            </div>
            <InputError message={isCryto? inputError.amountInputError : inputError}/>

            {isCryto && (
               <input type="text"  id="walletAddress" placeholder="Paste wallet address" className="bg-[#FCFCFC] mt-13 border border-[#60606026] rounded-3xl text-[#000006] placeholder:text-[#6B7280] focus:ring-2 focus:ring-[#006b5d8e] focus:outline-none w-full max-w-[400px] p-4" />
            )}

        </div>
    )
}