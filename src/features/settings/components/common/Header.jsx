import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "@/src/components/ui/Icons";

// pageDesc = page description e.g KYC, Edit Profile..
// btnDesc = button description h-16
export default function Header({ icon, pageDesc, btnDesc, onClick }) {
  const router = useRouter();
  const Icon = icon;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border border-[#8e8e8e]/20 bg-[#FFFFFF] backdrop-blur px-6 md:px-12">
      <nav className="mx-auto flex  h-[78px]  w-full  items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-5">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
          >
            <ArrowLeftIcon
              className="w-4 h-4 sm:w-5 sm:h-5 md:h-7 md:w-6 text-[#1C1B1B]"
              fill="#000000"
            />
          </button>
          <h1 className="text-xs sm:text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#115E59]">
            {pageDesc}
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          {btnDesc && (
            <div>
              <button
                onClick={onClick}
                className=" font-manrope font-semibold sm:text-sm whitespace-nowrap text-center flex justify-center items-center leading-5.5 text-[#FFFFFF] cursor-pointer bg-[#006B5C] py-[10px] px-[50px] gap-[10px] text-xs w-20 h-9 sm:w-[202px] sm:h-[43px] rounded-[10px]"
              >
                {btnDesc}
              </button>
            </div>
          )}
          <Link href="/notifications" label="Notifications">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:h-7 md:w-6 text-[#1C1B1B]" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
