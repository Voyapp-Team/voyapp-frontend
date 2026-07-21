"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import { NotificationIcon } from '@/src/components/ui/Icons';
import Modal from '@/src/components/ui/Modal';

import UploadProfilePic from '../../profile/components/common/UploadProfilePic';
import { User } from '../data/ProfileInfo';
import Header from './common/Header';
import { ArrowSquareRightIcon } from './common/SettingIcons';
import LegalSupport from './editprofilecomponents/LegalSupport';
import PaymentCard from './editprofilecomponents/PaymentCard';
import SecurityCard from './editprofilecomponents/SecurityCard';
import SupportCard from './editprofilecomponents/SupportCard';
import UserAccount from './editprofilecomponents/UserAccount';

export default function UserAccountSetting() {
  const router = useRouter();

  const [userData, setUserData] = useState(User);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header icon={NotificationIcon} />
      <section className="relative flex flex-col justify-center overflow-hidden items-center mt-27 sm:max-w-[706px]">
        <div className="flex flex-col items-center gap-2 mb-4">
          <UploadProfilePic />
          <p className="font-montserrat text-center font-bold text-2xl leading-9 text-[#1C1B1B]">
            {userData[0].user_name}
          </p>
          <p className="font-manrope text-center font-semibold text-sm leading-5 text-[#00C2A8]">
            {userData[0].other_links[1].link}
          </p>
          <div className="w-fit whitespace-nowrap justify-center py-[4px] px-[12px] border rounded-[4px] text-center font-manrope font-bold text-xs leading-4 text-[#3B6D62] ">
            {userData[0].job_role}
          </div>
          <button
            onClick={() => router.push("/settings/edit")}
            className="cursor-pointer whitespace-nowrap mt-4 bg-[#006B5C] py-[15px] px-[100px] rounded-[20px] max-w-[275px] max-h-[50px]"
          >
            Edit Profile
          </button>
        </div>
        <div className="w-full sm:w-[706px] mt-5 flex flex-col items-center gap-5">
          {/* <UserAccount onClick={}/> */}
          <UserAccount />
          <PaymentCard />
          <SecurityCard />
          <SupportCard />
          <LegalSupport />
        </div>
        <div className="flex items-center justify-center w-full h-[144px] pt-[40px] pb-[47px] shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <button
            onClick={() => setModal(true)}
            className="flex items-center justify-center h-[56px] py-[14px] gap-[8px] font-manrope font-semibold text-base leading-6 text-[#BA1A1A] cursor-pointer "
          >
            <ArrowSquareRightIcon />
            Log Out
          </button>
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
