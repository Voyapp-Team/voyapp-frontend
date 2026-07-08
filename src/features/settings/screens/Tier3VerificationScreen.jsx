"use client";

import Header from "../components/common/Header";
import KycTitle from "../components/common/KycTitle";
import AcceptedDocument from "../components/AcceptedDocument";
import Button from "@/src/components/ui/Button";
import UploadDocument from "../components/UploadDocument";
import { useState } from "react";
import Modal from "@/src/components/ui/Modal";
import KycSuccess from "../components/common/KycSuccess";

export default function Tier3VerificationScreen() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="bg-[#FCF8F8] min-h-screen px-4 py-30">
      <Header/>
      <main className="flex flex-col gap-6 w-full max-w-120 m-auto ">
        <KycTitle
          accountLevel="3"
          subtitle="Proof of Address"
        />
        <UploadDocument/>
        <AcceptedDocument/>
        <Button
          onClick={() => setIsSuccess(true)}
        >
          Submit Document
        </Button>

        {isSuccess && (
          <Modal
            isOpen={isSuccess}
            onClose={() => setIsSuccess(false)}
            buttonClassName={`hidden`}
            className="bg-transparent p-6"
          >
            <KycSuccess/>
          </Modal>
        )}
      </main>
    </div>
  );
}
