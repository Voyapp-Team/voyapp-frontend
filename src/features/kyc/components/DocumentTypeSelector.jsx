"use client";
import Button from '@/src/components/ui/Button';
import { ChevronDownIcon } from '@/src/components/ui/Icons';

export const DocumentTypeSelector = ({ handleClick, ...props }) => {
  return (
    <div className="flex flex-col gap-4 w-full sm:w-120">
      <div className="relative w-full h-15 border border-gray-200 rounded-2xl bg-[#FFFFFF] px-4 flex items-center">
        <select
          {...props}
          className="w-full h-full bg-transparent outline-none font-montserrat font-medium text-base z-20 leading-6 text-[#898989] appearance-none pr-8 cursor-pointer"
        >
          <option value="" hidden>
            Government Issued Document
          </option>
          <option value="International_Passport">International Passport</option>
          <option value="National_Identity_Card">National Identity Card</option>
          <option value="Driver_License">Driver License</option>
          <option value="Voter_Registration_Card">
            Voter's Registration Card
          </option>
        </select>
        <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#00C2A8] w-5 h-5 z-10" />
      </div>
      <Button onClick={handleClick} className=" mt-6 sm:mt-10">
        Continue
      </Button>
    </div>
  );
};
