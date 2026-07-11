"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import { NotificationIcon } from '@/src/components/ui/Icons';
import Modal from '@/src/components/ui/Modal';

import Header from '../components/common/Header';
import KycForm from '../components/common/KycForm';
import KycInput from '../components/common/KycInput';
import KycSuccess from '../components/common/KycSuccess';
import KycTitle from '../components/common/KycTitle';
import kycInputValidation from '../utils/kycInputValidation';

export const Tier1VerificationSecondStep = () => {
  const router = useRouter();

  const [kycData, setKycData] = useState({
    legal_name: "",
    phone_number: "",
    date_of_birth: "",
  });
  const [inputErrors, setInputErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKycData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputErrors({});
    const errors = kycInputValidation(kycData);
    const InValide = Object.keys(errors).length > 0;
    if (InValide) {
      setInputErrors(errors);
      return;
    }

    setIsSuccess(true);
  };
  return (
    <div className="flex flex-col items-center w-full  sm:top-25.5 sm:left-100  px-10 bg-[#f8f8f8] overflow-x-hidden pt-25">
      <Header pageDesc={"KYC"} icon={NotificationIcon} />

      {/*Main section*/}
      <KycTitle accountLevel="1" subtitle="Personal Identity Verification" />
      <section className="  flex items-center w-full max-w-120 min-h-88 sm:top-42 mt-4 sm:pt-10 sm:mt-10">
        <KycForm onSubmit={handleSubmit}>
          <KycInput
            name="legal_name"
            value={kycData.legal_name || ""}
            onChange={handleChange}
            type="text"
            label="Legal Name"
            error={inputErrors.legal_name}
          />

          <KycInput
            name="phone_number"
            value={kycData.phone_number || ""}
            onChange={handleChange}
            type="tel"
            label="Phone Number"
            error={inputErrors.phone_number}
          />

          <KycInput
            name="date_of_birth"
            value={kycData.date_of_birth || ""}
            onChange={handleChange}
            type="date"
            label="Date of Birth"
            error={inputErrors.date_of_birth}
          />

          <div className="w-[390px] sm:w-full mb-10">
            <Button type="submit" className="w-full">
              Done
            </Button>
          </div>
        </KycForm>
      </section>

      {isSuccess && (
        <Modal
          isOpen={isSuccess}
          onClose={() => setIsSuccess(false)}
          buttonClassName={`hidden`}
          className="bg-transparent p-6"
        >
          <KycSuccess level="2" />
        </Modal>
      )}
    </div>
  );
};
