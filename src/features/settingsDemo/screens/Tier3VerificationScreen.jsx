import Header from "../components/Header";
import KYCTitle from "../components/KYCTitle";

export default function Tier3VerificationScreen() {
  return (
    <main className="bg-[#FCF8F8] min-h-screen">
        <div className="flex flex-col gap-6 w-full max-w-[480px] m-auto py-30">
            <Header/>
            <KYCTitle
              type="3"
              subtitle="Bank Identity Verification"
            />
            
        </div>
    </main>
  );
}
