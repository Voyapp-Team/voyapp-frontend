"use client";
import { useState } from 'react';

import Button from '@/src/components/ui/Button';
import { NotificationIcon } from '@/src/components/ui/Icons';
import Modal from '@/src/components/ui/Modal';

import Header from '../components/common/Header';
import KycForm from '../components/common/KycForm';
import KycInput from '../components/common/KycInput';
import KycSuccess from '../components/common/KycSuccess';
import KycTitle from '../components/common/KycTitle';
import kycInputValidation from '../utils/kycInputValidation';

export default function Tier2VerificationScreen() {
  const [isSuccess, setIsSuccess] = useState(false);

  const [bvn, setBvn] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [inputValError, setInputValError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValError({}); // Clear previous errors

    const inputValidation = kycInputValidation({ accountNumber, bvn });

    if (Object.keys(inputValidation).length > 0) {
      setInputValError(inputValidation);
      return;
    }

    // Handle form submission logic here

    setIsSuccess(true);
  };

  return (
    <div className="bg-[#FCF8F8] min-h-screen px-4 py-30">
      <Header pageDesc={"KYC"} icon={NotificationIcon} />

      <main className="flex flex-col gap-6 w-full max-w-120 m-auto ">
        <KycTitle accountLevel="2" subtitle="Bank Identity Verification" />

        <KycForm onSubmit={handleSubmit}>
          <KycInput
            label="BVN"
            name="bvn"
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            error={inputValError.bvnInputError}
          />

          <KycInput
            label="ACCOUNT NUMBER"
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            name="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            error={inputValError.acctNumInputError}
          />

          <Button
            type="submit"
            className="bg-[#006B5C] text-white w-full py-3 rounded-lg mt-10"
          >
            Done
          </Button>
        </KycForm>

        {isSuccess && (
          <Modal
            isOpen={isSuccess}
            onClose={() => setIsSuccess(false)}
            buttonClassName={`hidden`}
            // overlayClassName={`bg-transparent`}
            className="bg-transparent p-6"
          >
            <KycSuccess level="3" />
          </Modal>
        )}
      </main>
    </div>
  );
}
