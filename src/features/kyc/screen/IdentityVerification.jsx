"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import InputError from '@/src/components/ui/InputError';
import Modal from '@/src/components/ui/Modal';

import FormInput from '../components/FormInput';
import { Checked } from '../components/kyc-icon';
import KycPersonalData from '../components/KycPeronalData';
import PageHeader from '../components/PageHeader';
import ValidateInput from '../utils/kycInputValidation';

export const IdentityVerification = () => {
  const router = useRouter();

  const [kycData, setKycData] = useState({});
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

    const errors = ValidateInput(kycData);

    const InValide = Object.keys(errors).length > 0;
    if (InValide) {
      setInputErrors(errors);
      return;
    }

    setInputErrors({});
    setIsSuccess(true);
    console.log("click");
  };
  return (
    <div className="flex flex-col items-center w-full h-screen sm:top-25.5 sm:left-100 px-10 bg-[#f8f8f8] overflow-x-hidden pb-6">
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

          <div className="w-[390px] sm:w-full mb-10">
            <Button type="submit" className="w-full">
              Done
            </Button>
          </div>
        </KycPersonalData>
      </section>
      {isSuccess && (
        <Modal
          buttonClassName={`bg-transparent z-40`}
          onClose={() => setIsSuccess(false)}
          // overlayClassName={`bg-transparent`}
          className="bg-transparent"
        >
          <div className="flex flex-col gap-5 w-[390px] sm:w-full">
            <div className="flex flex-col items-center bg-[#FFFFFF1A] brightness-[1.03] h-[331px] sm:w-[511px] rounded-[50px] border border-white/20 backdrop-blur-md">
              <div className="h-[250px] w-[250px]"></div>
              <p className="text-center font-montserrat font-bold text-[24px] leading-7 text-[#FFFFFF] ">
                Successfully Verified
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button onClick={() => router.push("/kyc/bank-verification")}>
                <p className="text-[#FFFFFF] font-montserrat font-bold text-lg leading-7">
                  Upgrade to Tier 2
                </p>
              </Button>

              <Button
                variant="transparent"
                onClick={() => router.push("/dashboard")}
              >
                <p className="text-[#FFFFFF] font-montserrat font-bold text-lg leading-7">
                  Go to Dashboard
                </p>
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
