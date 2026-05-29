"use client";
import Button from "@/src/components/ui/Button";
import withdrawalInputValidation from "../utils/withdrawalInputValidation";
import InputError from "../../../components/ui/InputError";
import { ArrowRightIcon  } from "@/src/components/ui/Icons";

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function BankDetailsForm() {
    const [accountNumber, setAccountNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [saveDetails, setSaveDetails] = useState(false);
    const router = useRouter();
    const [inputError, setInputError] = useState({
        bankNameInputError: "",
        accountNumInputError: "",
    });

    const handleBankChange = (e) => {
        const selectedBank = e.target.value;
        setBankName(selectedBank);
        if (selectedBank) {
            setInputError(prev => ({ ...prev, bankNameInputError: "" }));
        }
    };

    const handleAccountNumberChange = (e) => {
        const input = e.target.value;
        setAccountNumber(input);

        if (input.length >= 10) {
            const accountError = withdrawalInputValidation({input});
            if (Object.keys(accountError).length > 0) {
                setInputError(prev => ({ ...prev, accountNumInputError: accountError.accountNumError }));
            }

        } else {
            setInputError(prev => ({ ...prev, accountNumInputError: "" }));
        }   
    } 

    const detailsError = withdrawalInputValidation({input: accountNumber, bank: bankName});

    const isValidAccount = Object.keys(detailsError).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const accountError = withdrawalInputValidation({input: accountNumber,  bank: bankName});
        if (Object.keys(accountError).length > 0) {
            setInputError(prev => ({ ...prev, accountNumInputError: accountError.accountNumError, bankNameInputError: accountError.bankNameError }));
            return;
        }
        router.push("/dashboard/withdrawal/bank/amount");
       
    };

    const accountName = "John Doe";
    const bankOptions = ["Choose a bank","GTBank", "Access Bank", "Zenith Bank", "First Bank", "UBA"];  
  return (
    <form className="flex flex-col w-full  bg-white md:rounded-[50px]" onSubmit={handleSubmit}>
      <h2 className="text-[30px] font-extrabold font-plusJakartaSans leading-[37.5px] text-[#1C1B1B] tracking-[-0.75px]">Transfer Details</h2>
      <p className="text-[16px] text-[#3C4A46] font-medium font-manrope leading-6  mb-8">Specify where you'd like to receive your funds within Nigeria.</p>

      <div className="w-full max-w-[400px]">
        <label className="block text-[14px] font-semibold font-manrope leading-5 text-[#3C4A46] mb-2" htmlFor="accountNumber">Account Number</label>
        <input 
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={10}
          id="accountNumber" 
          name="accountNumber" 
          className=" 
            text-[18px] font-bold leading-[100%] 
            w-full px-[16px] py-[15px] text-[#1C1B1B] 
            bg-[#F6F3F2] font-montserrat  rounded-xl
            focus:outline-none focus:ring-2 focus:ring-[#00C2A8] 
            placeholder:text-[#D4D4D8]
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            " 
        
          placeholder="0123456789"
          value={accountNumber}            
          onChange={handleAccountNumberChange}
        />
      </div>
        {inputError && <InputError message={inputError.accountNumInputError} />}

        <div className="w-full max-w-[400px] mt-6">
            <label className="block text-[14px] font-semibold font-manrope leading-5 text-[#3C4A46] mb-2" htmlFor="bankName">Select Bank</label>
            <select id="bankName" name="bankName" className="w-full text-[#1C1B1B] border-0 bg-[#F6F3F2] px-[16px]  py-[8px] pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C2A8]"
            value={bankName}
            onChange={handleBankChange}
            >
                {bankOptions.map((option, index) => (
                    <option key={index} value={index===0 ? "" : option} className="text-[18px] font-bold leading-[100%] font-montserrat " >{option}</option>
                ))}
            </select>
       </div>
        {inputError && <InputError message={inputError.bankNameInputError} />}


      {bankName && isValidAccount && (
        <>
        <div className="flex gap-4 bg-[#65FADE33] p-4 rounded-xl my-4 items-center">
          <img src="/withdrawal/confirm-icon.svg" alt="Confirm Transfer Details Illustration" className="  " />  
          <div className="">
              <p className="font-montserrat font-bold text-[12px] leading-4 traxking-[0.6px] text-[#006B5C]">RECIPIENT VERIFIED</p> 
              <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">CONFIRMED: {accountName} - {bankName}</p>
          </div>
       </div>
       

       <div className="flex bg-[#F0EDEC] p-4 rounded-xl gap-4">
            <img src="/withdrawal/save-icon.svg" alt="Save Transfer Details Illustration" className="cursor-pointer" />
            <p className="font-manrope font-semibold text-[16px] leading-6 text-[#1C1B1B]">Save for future withdrawals</p>
            <button
                type="button"
                className={`w-[44px] h-[24px] rounded-full ${saveDetails? "bg-[#65FADE33]" : "bg-white"} p-0.5 ml-auto flex items-center cursor-pointer`}
                onClick={() => setSaveDetails(prev => !prev)}
            >
                <span
                    className={` w-5 h-5 rounded-full transition-transform duration-300
                    ${saveDetails ? "translate-x-4.5 bg-[#006B5C]" : "bg-[#C3C3C3]"}
                    `}
                />
            </button>
       </div>
       </>
       )}
       <div className=" bg-[#F0EDEC] p-6 rounded-2xl  mt-30">
           <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Estimated Fee</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">₦100.00</p>
           </div>
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Arrival Time</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#006B5C]">Instant</p>
            </div>
       </div>

        <Button variant="primary" className="mt-8" type="submit"
          endIcon= {<ArrowRightIcon className="h-4 w-4"/>}
        >
            Withdraw Funds  
        </Button>
       
    </form>
  );
}