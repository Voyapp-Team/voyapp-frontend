"use client";
import WithdrawalAmountInput from "../components/common/WithdrawalAmountInput";
import CryptoTransferDetailsSummary from "../components/CryptoTransferDetailsSummary";
import Button from "@/src/components/ui/Button";
import { ArrowRightIcon } from "@/src/components/ui/Icons";
import Modal from "@/src/components/ui/Modal";
import { useState } from "react";
import TransactionOtpVerification from "@/src/components/ui/TransactionOtpVerification";
import { useParams } from "next/navigation";   
import withdrawalInputValidation from "../utils/withdrawalInputValidation"; 

export default function CryptoTransferDetailsScreen() {
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [amount, setAmount] = useState("");
    const [inputError, setInputError] = useState({amountInputError:"", walletImputError:"", otpInputError:""});
    const [otp, setOtp] = useState("");
    const { network } = useParams();

    const handleConfirmWithdrawal = () => {
        
        const validationResult = withdrawalInputValidation({amount});

        if(Object.keys(validationResult).length > 0){
            setInputError(prev => (
                {...prev, 
                    amountInputError:validationResult.amountError,
                    walletImputError:validationResult.walletError}));
            return;
        }

        setIsModalOpen(true)

    }

    return (
        <div className=" flex flex-col items-center my-10 w-full max-w-[448px] m-auto bg-white md:rounded-[50px]  px-[24px] pt-[98px] pb-[48px]">    
            <WithdrawalAmountInput 
             isCryto={true} 
             cryptoBalance={800} 
             crytoType={network} 
             amount={amount}
             setAmount={setAmount}
             inputError={inputError}
            />
            <CryptoTransferDetailsSummary 
               amount={amount}
            />
            <Button className="w-full max-w-[400px] mt-6" variant="primary"
              endIcon={<ArrowRightIcon className="h-4 w-4" />}
              onClick={handleConfirmWithdrawal}
            >
                Confirm Withdrawal
            </Button>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className= "bg-[#FFFFFF1A] border border-[#E8E8E8]" overlayClassName='bg-[#000000]' buttonClassName='bg-[#FFFFFF1A]'>
                    <TransactionOtpVerification setOtp={setOtp} /> 
                </Modal>
            )}
        </div>

    )
};