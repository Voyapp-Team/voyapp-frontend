"use client";

import { useRouter } from 'next/navigation';

import PageHeader from '../components/PageHeader';

export const BankVerification = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full h-screen sm:top-25.5 sm:left-100 px-10 bg-[#f8f8f8] overflow-x-hidden">
      {/* header */}
      <div className="flex flex-col items-center w-122.5 mb-5">
        <PageHeader accountLevel="kyc-2" />
      </div>

      {/*Main section*/}
      <section className="flex items-center w-120 min-h-88 sm:top-42 mt-4 sm:pt-10 sm:mt-10"></section>
    </div>
  );
};
