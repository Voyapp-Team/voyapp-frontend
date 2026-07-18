"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import Modal from '@/src/components/ui/Modal';

import {
  DetailsCard,
  DetailsHeader,
} from '../common/DetailsCard';
import {
  ChatIcon,
  DeleteIcon,
  HelpIcon,
} from '../common/SettingIcons';

const paymentOptions = [
  {
    icon: HelpIcon,
    label: "Help Center",
  },
  {
    icon: ChatIcon,
    label: "Whatsapp Support",
  },
  {
    icon: DeleteIcon,
    label: "Delete Account",
  },
];

export default function SupportCard() {
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const handleClick = (index) => {
    if (index === 2) {
      setModal(true);
    } else {
      router.push("/settings/crypto-wallets");
    }
  };

  return (
    <>
      <DetailsCard>
        <DetailsHeader>Support</DetailsHeader>
        <section className="flex flex-col gap-2">
          {paymentOptions.map((item, index) => {
            const Icon = item.icon;

            const isMiddleItem = index === 1;

            return (
              <div
                key={index}
                className="flex justify-between items-center gap-3 p-[16px] rounded-[16px] hover:bg-gray-50 transition-all cursor-pointer"
              >
                <div
                  className="flex gap-[16px] items-center"
                  onClick={() => handleClick(index)}
                >
                  <Icon className="w-4 h-4" fill="#006B5C" />
                  <p
                    className={`font-manrope font-semibold  text-sm leading-[22.5px] ${index === 2 ? "text-[#EB0606]" : "text-[#1C1B1B]"}`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </DetailsCard>

      {modal && (
        <Modal
          className={`flex flex-col gap-5 h-fit bg-transparent border border-[#FCF8F81A] max-w-[510px] p-6`}
          buttonClassName={"hidden"}
        >
          <div className="flex flex-col gap-2 font-montserrat font-extrabold text-2xl leading-9 text-center text-[#FFFFFF]">
            <p>
              You can not undone this Action
              <br /> Are you sure?
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Button onClick={() => setModal(false)}>No</Button>
            <Button
              variant="transparent"
              onClick={() => {
                router.push("/onboarding/freelancer-signup");
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
