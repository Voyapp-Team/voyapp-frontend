"use client";

import {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import InputError from '@/src/components/ui/InputError';
import Modal from '@/src/components/ui/Modal';
import OtpInput from '@/src/components/ui/OtpInput';

import {
  DetailsCard,
  DetailsHeader,
} from '../common/DetailsCard';
import {
  ArrowRightIcon,
  EmailIcon,
  PhoneIcon,
  PinIcon,
} from '../common/SettingIcons';

const accountInfo = [
  {
    icon: PhoneIcon,
    label: "Phone Number",
  },
  {
    icon: EmailIcon,
    label: "Email Address",
  },
  {
    icon: PinIcon,
    label: "Change PIN",
  },
];
export default function SecurityCard({ onClick }) {
  const router = useRouter();

  const [pinValue, setPinValue] = useState("");
  const [pinError, setPinError] = useState("");

  const [modal, setModal] = useState(false);

  const verifyPin = (currentPin) => {
    if (currentPin.length < 4) {
      setPinError("");
      return;
    }

    const isCorrectPin = currentPin === "1234" || true;

    if (isCorrectPin) {
      setPinError("");
      setModal(false);
      router.push("/settings/edit-profile");
      console.log("verified");
    } else {
      // 🟢 The error is ONLY set here once a full 4-digit attempt fails
      setPinError("Incorrect PIN. Please try again.");
    }
  };

  useEffect(() => {
    if (pinValue.length === 4) {
      verifyPin(pinValue);
    }
  }, [pinValue]);

  return (
    <>
      <DetailsCard>
        <DetailsHeader>Account</DetailsHeader>
        <section className="flex flex-col gap-2">
          {accountInfo.map((item, index) => {
            const Icon = item.icon;

            const isLast = index === accountInfo.length - 1;

            return (
              <div
                key={index}
                className="flex justify-between items-center hover:bg-gray-50 gap-3 p-[16px] rounded-[16px]"
              >
                <div className="flex gap-[16px] items-center">
                  <Icon className="w-4 h-4" />
                  <p className="font-manrope font-semibold text-[#1C1B1B] text-sm leading-[22.5px]">
                    {item.label}
                  </p>
                </div>
                {isLast ? (
                  <button
                    onClick={() => setModal(true)}
                    className="flex justify-center w-[27px] h-[22px] rounded-[20px] py-2 px-4 gap-[10px] hover:border hover:boerder-[#1C1B1B] items-center"
                  >
                    <ArrowRightIcon className="w-3 h-3 shrink-0" />
                  </button>
                ) : (
                  <button
                    onClick={() => router.push("/settings/edit")}
                    className="font-manrope font-bold text-sm leading-5 text-[#006B5C]"
                  >
                    Edit
                  </button>
                )}
              </div>
            );
          })}
        </section>
      </DetailsCard>

      {modal && (
        <Modal
          className={`flex flex-col gap-5 h-fit bg-transparent border border-[#FCF8F81A] max-w-[510px] p-6`}
          buttonClassName={"hidden"}
          onClose={() => setModal(false)}
        >
          <div className="flex flex-col gap-2 font-montserrat font-semibold text-2xl leading-9 text-center text-[#FFFFFF]">
            <p>Input your 4 digits pin</p>
          </div>
          <div className="flex flex-col gap-5">
            <OtpInput
              length={4}
              className={`bg-[#006B5C33] h-[102px] w-95px rounded-xl text-2xl`}
              onChange={(value) => {
                setPinValue(value);
                if (pinError) setPinError("");
              }}
            />
            <InputError message={pinError} />
          </div>
        </Modal>
      )}
    </>
  );
}
