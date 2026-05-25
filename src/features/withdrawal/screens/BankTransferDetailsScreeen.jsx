"use client";

import WithdrawalAmountInput from "../components/common/WithdrawalAmountInput";
import BankTransferDetailSummary from "../components/BankTransferDetailSummary";
import Button from "@/src/components/ui/Button";
import { ArrowRightIcon } from "@/src/components/ui/Icons";
import Modal from "@/src/components/ui/Modal";
import { useState, useEffect } from "react";
import TransactionOtpVerification from "@/src/components/ui/TransactionOtpVerification";
import { useRouter } from "next/navigation";
import withdrawalInputValidation from "../utils/withdrawalInputValidation";

export default function BankTransferDetailsScreen() {
    const [amount, setAmount] = useState("");
    const [amountInputError, setAmountInputError] = useState("");
    const [otpInputError, setOtpInputError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [otp, setOtp] = useState("");
    const router = useRouter();
  

    useEffect(() => {
       if(otp.length === 4){
            const validationResult = withdrawalInputValidation({otp});
            if(Object.keys(validationResult).length > 0){
                setOtpInputError(validationResult.otpError)
                return;
            }
            const timer=  setTimeout(() => {
                setIsModalOpen(false);
                router.push("/withdrawal/success");
            }, 2000);

            return () => clearTimeout(timer);
       }

    }, [otp, router]);

    const handleContinueWithdrawal = () => {
        setAmountInputError("")
        
        const validationResult = withdrawalInputValidation({amount});

        if(Object.keys(validationResult).length > 0){
            setAmountInputError(validationResult.amountError);
            return;
        }

        setIsModalOpen(true)

    }



    return (
        <div className=" flex flex-col items-center w-full max-w-[448px] m-auto my-10 bg-white md:rounded-[50px]  px-[24px] pt-[98px] pb-[48px] m-auto">
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
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className= "bg-[#FFFFFF1A] border border-[#E8E8E8]" overlayClassName='bg-[#000000]' buttonClassName='bg-[#FFFFFF1A]'>
                    <TransactionOtpVerification setOtp={setOtp} inputError={otpInputError} /> 
                </Modal>
            )}

           
        </div>
    )
}