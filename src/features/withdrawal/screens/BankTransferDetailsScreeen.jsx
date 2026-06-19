"use client";

import WithdrawalAmountInput from "../components/common/WithdrawalAmountInput";
import BankTransferDetailSummary from "../components/BankTransferDetailSummary";
import Button from "@/src/components/ui/Button";
import { ArrowRightIcon } from "@/src/components/ui/Icons";
import Modal from "@/src/components/ui/Modal";
import { useState, useEffect } from "react";
import TransactionOtpVerification from "@/src/components/ui/TransactionOtpVerification";
import TransactionSuccessSummaryScreen from "./TransactionSuccessSummaryScreen";
import withdrawalInputValidation from "../utils/withdrawalInputValidation";

export default function BankTransferDetailsScreen() {
    const [amount, setAmount] = useState("");
    const [amountInputError, setAmountInputError] = useState("");
    const [otpInputError, setOtpInputError] = useState("");
    const [isPinModalOpen, setIsPinModalOpen] = useState(false);
    const [isTransSuccess, setIsTransSuccess] = useState(false);
    const [otp, setOtp] = useState("");
    
  

    useEffect(() => {
       if(otp.length === 4){
            const validationResult = withdrawalInputValidation({otp});
            if(Object.keys(validationResult).length > 0){
                setOtpInputError(validationResult.otpError)
                return;
            }
            const timer=  setTimeout(() => {
                setIsPinModalOpen(false);
                setIsTransSuccess(true);
                
            }, 2000);

            return () => clearTimeout(timer);
       }

    }, [otp]);

    const handleContinueWithdrawal = () => {
        setAmountInputError("")
        
        const validationResult = withdrawalInputValidation({amount});

        if(Object.keys(validationResult).length > 0){
            setAmountInputError(validationResult.amountError);
            return;
        }

        setIsPinModalOpen(true)

    }



    return (
        <div className=" flex flex-col items-center w-full md:max-w-[448px] m-auto my-10 bg-white rounded-[50px]  px-[24px] pt-[98px] pb-[48px] m-auto">
            <WithdrawalAmountInput
              amount={amount}
              setAmount={setAmount}
              inputError={amountInputError}
            />
            <BankTransferDetailSummary amount={amount} />
            <Button className="w-full max-w-[400px] mt-6" variant="primary"
              endIcon={<ArrowRightIcon className="h-4 w-4" />}
              onClick={handleContinueWithdrawal}
            >
                Confirm Withdrawal
            </Button>
            {isPinModalOpen && (
                <Modal isOpen={isPinModalOpen} onClose={() => setIsPinModalOpen(false)} className= "bg-[#FFFFFF1A] border border-white/20  border-l-white border-b-white  shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-md"  buttonClassName='bg-[#FFFFFF1A]'>
                    <TransactionOtpVerification setOtp={setOtp} inputError={otpInputError} /> 
                </Modal>
            )}

            {isTransSuccess && (
                <Modal isOpen={isTransSuccess} onClose={() => setIsTransSuccess(false)} className= "bg-[#FFFFFF1A] border border-white/20  border-l-white border-b-white  shadow-[0_8px_32px_rgba(0,0,0,0.12)]"  buttonClassName='hidden'>
                    <TransactionSuccessSummaryScreen />
                </Modal>
            )}
           
        </div>
    )
}