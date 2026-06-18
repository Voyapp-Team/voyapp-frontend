"use client";

import Button from "@/src/components/ui/Button";
import AccountCard from "../components/AccountCard";
import SecurityNotice from "../components/SecurityNotice";

import { useCopyAccount } from "../hooks/useCopyAccount";
import { shareAccountDetails } from "../utils/share";

import { ArrowRightIcon } from "@/src/components/ui/Icons"; // optional use

export default function AddMoneyScreen() {
  const { copied, copyToClipboard } = useCopyAccount();

  const accountDetails = {
    accountNumber: "8124163754",
    accountName: "PRINCE SOMADINA NWORIE",
  };

  const handleCopy = () => {
    copyToClipboard(accountDetails.accountNumber);
  };

  const handleShare = () => {
    shareAccountDetails(accountDetails);
  };

  return (
    <main className="min-h-screen bg-[var(--color-surface-muted)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[560px] flex flex-col gap-5 font-montserrat">
        <AccountCard
          accountNumber={accountDetails.accountNumber}
          accountName={accountDetails.accountName}
          copied={copied}
          onCopy={handleCopy}
        />

        <Button
          variant="primary"
          className="rounded-[28px] py-4 text-sm tracking-[0.04em]"
          onClick={handleShare}
          endIcon={<ArrowRightIcon className="w-4 h-4" />}
        >
          SHARE DETAILS
        </Button>

        <SecurityNotice />
      </div>
    </main>
  );
}