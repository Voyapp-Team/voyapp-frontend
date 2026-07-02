"use client"
import Header from "../components/Header";
import Tier2Form from "../components/Tier2Form";
import KYCTitle from "../components/KYCTitle";

export default function Tier2VerificationScreen() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] m-auto py-30">
      <Header/>
      <KYCTitle/>
      <Tier2Form/>
    </div>
  );
}
