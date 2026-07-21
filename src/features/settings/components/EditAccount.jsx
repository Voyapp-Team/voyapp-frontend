"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import { NotificationIcon } from '@/src/components/ui/Icons';
import InputError from '@/src/components/ui/InputError';
import Modal from '@/src/components/ui/Modal';
import OtpInput from '@/src/components/ui/OtpInput';

import { InputField } from '../../profile/components/ui/InputField';
import Header from './common/Header';
import {
  EmailIcon,
  PhoneIcon,
  PinIcon,
} from './common/SettingIcons';

export default function EditAccount() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    phone_number: "",
    user_email: "",
    user_PIN: "",
  });
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const [pinError, setPinError] = useState("");

  //   const handleSubmit = () => {
  //     const error = kycInputValidation(userData);
  //     const Invalid = Object.keys(error).length > 0;
  //     if(Invalid){
  //         setInputError(error);
  //     }
  //   };
  const handleSubmit = () => {
    router.push("/settings");
  };
  return (
    <>
      <Header
        pageDesc={"Edit Profile"}
        btnDesc={isLoading ? "....." : "Save Changes"}
        icon={NotificationIcon}
        onClick={handleSubmit}
      ></Header>
      <section className="flex flex-col gap-10 overflow-hidden h-full items-center mt-15">
        <div className="w-full px-4 py-5 sm:max-w-[750px] lg:max-w-[1,074px] bg-[#f9f9f9] mt-5 flex flex-col gap-1 rounded-xl">
          <div className="flex items-center gap-[16px] ">
            <PhoneIcon className="w-3.5 h-3.5" />
            <h3 className="font-manrope font-semibold text-[15px] leading-5.4 text-[#1C1B1B]">
              Phone Number
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <div>
              <InputField
                label={"Current Number"}
                labelClass={`flex flex-col font-manrope font-medium text-xs leading-4.6 text-[#8C8C8C] sm:ml-7`}
                className={`border border-[#E3E3E3] bg-[#FFFFFF] h-[50px] w-full md:max-w-[289px] rounded-lg outline-none text-[#1C1B1B]`}
              />
              <InputError message={inputError} />
            </div>
            <div>
              <InputField
                label={"New Number"}
                labelClass={`flex flex-col font-manrope font-medium text-xs leading-4.6 text-[#8C8C8C] sm:ml-10`}
                className={`border border-[#E3E3E3] bg-[#FFFFFF] h-[50px] w-full md:max-w-[289px] rounded-lg outline-none text-[#1C1B1B]`}
              />
              <InputError message={inputError} />
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-5 sm:max-w-[750px] lg:max-w-[1,074px] bg-[#f9f9f9] mt-5 flex flex-col gap-1 rounded-xl">
          <div className="flex items-center gap-[16px] ">
            <EmailIcon className="w-3.5 h-3.5" />
            <h3 className="font-manrope font-semibold text-[15px] leading-5.4 text-[#1C1B1B]">
              Email Address
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <div>
              <InputField
                label={"Current Number"}
                labelClass={`flex flex-col font-manrope font-medium text-xs leading-4.6 text-[#8C8C8C] sm:ml-7`}
                className={`border border-[#E3E3E3] bg-[#FFFFFF] h-[50px] w-full md:max-w-[289px] rounded-lg outline-none text-[#1C1B1B]`}
              />
              <InputError message={inputError} />
            </div>
            <div>
              <InputField
                label={"New Number"}
                labelClass={`flex flex-col font-manrope font-medium text-xs leading-4.6 text-[#8C8C8C] sm:ml-10`}
                className={`border border-[#E3E3E3] bg-[#FFFFFF] h-[50px] w-full md:max-w-[289px] rounded-lg outline-none text-[#1C1B1B]`}
              />
              <InputError message={inputError} />
            </div>
          </div>
        </div>
        <div className="w-full px-4 pt-5 pb-9 sm:max-w-[750px] lg:max-w-[1,074px] bg-[#f9f9f9] mt-5 flex flex-col gap-2 rounded-xl mb-10">
          <div className="flex items-center gap-[16px] ">
            <PinIcon className="w-3.5 h-3.5" />
            <h3 className="font-manrope font-semibold text-[15px] leading-5.4 text-[#1C1B1B]">
              Change PIN
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <div className="flex flex gap-5">
              <div className="sm:ml-6 w-full h-[50px] md:max-w-[264px]">
                <p className="text-[#8C8C8C] font-manrope font-medium text-xs leading-4.5 mb-1">
                  Current PIN
                </p>
                <OtpInput
                  length={4}
                  className={`bg-[#FFFFFF] border border-[#E3E3E3] text-[#1C1B1B] h-[60px] w-7 rounded-xl text-2xl`}
                  onChange={(value) => {
                    setPinValue(value);
                    if (pinError) setPinError("");
                  }}
                />
                <InputError message={inputError} />
              </div>
              <div className="sm:ml-9 w-full h-[50px] md:max-w-[264px]">
                <p className="text-[#8C8C8C] font-manrope font-medium text-xs leading-4.5 mb-1">
                  New PIN
                </p>
                <OtpInput
                  length={4}
                  className={`bg-[#FFFFFF] border border-[#E3E3E3] text-[#1C1B1B] h-[60px] w-7 rounded-xl text-2xl`}
                  onChange={(value) => {
                    setPinValue(value);
                    if (pinError) setPinError("");
                  }}
                />
                <InputError message={inputError} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal && (
        <Modal
          className={`flex flex-col gap-5 h-fit bg-transparent border border-[#FCF8F81A] w-full sm:w-[410px] p-6`}
          buttonClassName={"hidden"}
        >
          <div className="flex flex-col gap-2 font-montserrat font-extrabold text-2xl leading-9 text-center text-[#FFFFFF]">
            <p>Are you sure?</p>
          </div>
          <div className="flex flex-col gap-5">
            <Button onClick={() => setModal(false)}>No</Button>
            <Button
              variant="transparent"
              onClick={() => {
                router.push("/onboarding");
                setModal(false);
              }}
              className="border border-[#00C2A8] text-[#00C2A8]"
            >
              Yes
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
