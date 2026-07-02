"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import InputError from '@/src/components/ui/InputError';

import FormInput from '../components/FormInput';
import { Checked } from '../components/kyc-icon';
import KycPersonalData from '../components/KycPeronalData';
import PageHeader from '../components/PageHeader';
import ValidateInput from '../utils/kycInputValidation';

export const IdentityVerification = () => {
  const router = useRouter();

  const [kycData, setKycData] = useState({});
  const [inputErrors, setInputErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKycData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = ValidateInput(kycData);

    const InValide = Object.keys(errors).length > 0;
    if (InValide) {
      setInputErrors(errors);
      return;
    }

    setInputErrors({});
    router.push("/kyc/bank-verification");
  };
  return (
    <div className="flex flex-col items-center w-full h-screen sm:top-25.5 sm:left-100 px-10 bg-[#f8f8f8] overflow-x-hidden">
      {/* header */}
      <div className="flex flex-col items-center w-122.5 mb-5">
        <PageHeader accountLevel="kyc-1" />
      </div>

      {/*Main section*/}
      <section className="flex items-center w-120 min-h-88 sm:top-42 mt-4 sm:pt-10 sm:mt-10">
        <KycPersonalData onSubmit={handleSubmit}>
          <div className="relative ">
            <FormInput
              name="legal_name"
              value={kycData.legal_name || ""}
              onChange={handleChange}
              type="text"
              label="Legal Name"
            />
            <Checked className="absolute top-14.5 right-4" />
            <InputError message={inputErrors.legal_name} />
          </div>

          <div className="relative">
            <FormInput
              name="phone_number"
              value={kycData.phone_number || ""}
              onChange={handleChange}
              type="tel"
              label="Phone Number"
            />
            <Checked className="absolute top-14.5 right-4" />
            <InputError message={inputErrors.phone_number} />
          </div>

          <FormInput
            name="date_of_birth"
            value={kycData.date_of_birth || ""}
            onChange={handleChange}
            type="date"
            label="Date of Birth"
          />
          <InputError message={inputErrors.date_of_birth} />

          <Button type="submit" className="mt-10">
            Done
          </Button>
        </KycPersonalData>
      </section>
    </div>
  );
};
