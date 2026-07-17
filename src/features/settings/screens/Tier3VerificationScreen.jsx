"use client";

import { useState } from 'react';

import Button from '@/src/components/ui/Button';
import { NotificationIcon } from '@/src/components/ui/Icons';
import Modal from '@/src/components/ui/Modal';

import AcceptedDocument from '../components/AcceptedDocument';
import Header from '../components/common/Header';
import KycSuccess from '../components/common/KycSuccess';
import KycTitle from '../components/common/KycTitle';
import UploadDocument from '../components/UploadDocument';

export default function Tier3VerificationScreen() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="bg-[#FCF8F8] min-h-screen px-4 py-30">
      <Header pageDesc={"KYC"} icon={NotificationIcon} />
      <main className="flex flex-col gap-6 w-full max-w-120 m-auto ">
        <KycTitle accountLevel="3" subtitle="Proof of Address" />
        <UploadDocument />
        <AcceptedDocument />
        <Button onClick={() => setIsSuccess(true)}>Submit Document</Button>

        {isSuccess && (
          <Modal
            isOpen={isSuccess}
            onClose={() => setIsSuccess(false)}
            buttonClassName={`hidden`}
            className="bg-transparent p-6"
          >
            <KycSuccess />
          </Modal>
        )}
      </main>
    </div>
  );
}
