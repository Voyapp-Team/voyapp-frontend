"use client";
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { ShieldIcon } from '@/src/components/ui/Icons';
import InputError from '@/src/components/ui/InputError';

import { DocumentTypeSelector } from '../components/DocumentTypeSelector';
import {
  Dot,
  Star,
  Voya,
} from '../components/kyc-icon';
import PageHeader from '../components/PageHeader';

const tierBenefits = [
  {
    title: "Basic Withdrawals",
    description: "Daily withdrawal limit of $5,000 USD to local bank accounts.",
  },
  {
    title: "Share Payment Link",
    description: "Request payments directly via personalized Voya links.",
  },
  {
    title: "Asset Staking",
    description: "Access to low-tier yield generation on stable assets.",
  },
];
export const KYCScreen = () => {
  const router = useRouter();

  const [documentType, setDocumentType] = useState("");

  const [inputError, setInputError] = useState(false);
  const handleChange = (event) => {
    const selectedDocumentType = event.target.value;
    setDocumentType(selectedDocumentType);
  };

  const handleClick = () => {
    if (!documentType || documentType === "") {
      setInputError(true);
      return;
    }
    // router.push(`/kyc/identity-verification?documentType=${documentType}`);
    router.push(`/kyc/identity-verification`);
  };

  return (
    <div className="relative flex flex-col gap-10 w-full items-center min-h-screen sm:px-6 py-6 overflow-hidden bg-[#f8f8f8]">
      {/* header */}
      <div className="flex flex-col items-center w-122.5">
        <PageHeader accountLevel="kyc-1" icon={ShieldIcon} />
        {inputError && <InputError message="Please select a document type." />}
        <DocumentTypeSelector
          value={documentType}
          onChange={handleChange}
          handleClick={handleClick}
        />
      </div>
      {/* top-[396px] */}
      <div className="absolute hidden md:block top-75 left-5 lg:left-33.5">
        <Voya />
      </div>
      {/*Main section*/}
      <section className="flex flex-col w-122.5 h-fit rounded-4xl gap-6 bg-[#FFFFFF] p-6 mt-15">
        <div className="flex items-center gap-2 text-[#006B5C99]">
          <Star className="w-4 h-4" />
          <p className="font-montserrat font-bold text-lg leading-7">
            Tier 1 Benefits
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            {tierBenefits.map((benefit, index) => (
              <li key={index} className="flex gap-2">
                <Dot className="w-2 h-2 mt-1" />
                <div>
                  <p className="text-[#777777] font-montserrat font-bold text-base leading-6">
                    {benefit.title}
                  </p>
                  <span className="text-[#3C4A46] font-montserrat font-regular text-sm leading-5.5 w-86.75 h-11.5">
                    {benefit.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
