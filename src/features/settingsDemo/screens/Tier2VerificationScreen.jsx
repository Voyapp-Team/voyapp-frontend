"use client"
import Header from "../components/Header";
import Tier2Form from "../components/Tier2Form";
import KYCTitle from "../components/KYCTitle";

export default function Tier2VerificationScreen() {
  return (
    <main className="bg-[#FCF8F8] min-h-screen">
      <div className="flex flex-col gap-6 w-full max-w-[480px] m-auto py-30">
        <Header/>
        <KYCTitle
          type="2"
          subtitle="Bank Identity Verification"
        />
        <Tier2Form/>
      </div>
    </main>
  );
}
