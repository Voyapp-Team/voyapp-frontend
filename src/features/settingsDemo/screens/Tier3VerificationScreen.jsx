import Header from "../components/Header";
import KYCTitle from "../components/KYCTitle";
import AcceptedDocument from "../components/AcceptedDocument";
import Button from "@/src/components/ui/Button";
import UploadDocument from "../components/UploadDocument";

export default function Tier3VerificationScreen() {
  return (
    <main className="bg-[#FCF8F8] min-h-screen px-4">
        <div className="flex flex-col gap-6 w-full max-w-[480px] m-auto py-30">
          <Header/>
          <KYCTitle
            type="3"
            subtitle="Proof of Address"
          />
          <UploadDocument/>
          <AcceptedDocument/>
          <Button>
            Submit Document
          </Button>
            
        </div>
    </main>
  );
}
