"use client";

import Button from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";

export default function KycSuccess({level}) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 w-[390px] sm:w-full">
        <div className="flex flex-col items-center bg-[#FFFFFF1A] brightness-[1.03] h-[331px] sm:w-[511px] rounded-[50px] border border-white/20 backdrop-blur-md">
            <div className="h-[250px] w-[250px]"></div>
            <p className="text-center font-montserrat font-bold text-[24px] leading-7 text-[#FFFFFF] ">
            Successfully Verified
            </p>
        </div>
        <div className="flex flex-col gap-3">

            {level && (
                <Button onClick={() => router.push(`/settings/tier-${level}`)}>
                    <p className="text-[#FFFFFF] font-montserrat font-bold text-lg leading-7">
                        Upgrade to Tier {level}
                    </p>
                </Button>
            )}

            <Button
                variant="transparent"
                onClick={() => router.push("/dashboard")}
            >
                <p className="text-[#FFFFFF] font-montserrat font-bold text-lg leading-7">
                    Go to Dashboard
                </p>
            </Button>
        </div>
    </div>
  );
} 