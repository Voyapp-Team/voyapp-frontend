"use client"
import { useRouter } from "next/navigation"

export default function ActivityDetailsHeader(){
    const router = useRouter()
    return(
        <header className="bg-[#FFFFFFB2] flex items-center justify-between gap-6 h-[68px] px-6 fixed right-0 left-0 top-0 backdrop-blur-xl z-5">
            <div 
              className="flex h-[32px] w-[32px] items-center justify-center cursor-pointer" 
              role="button" 
              aria-label="Navigate Back"
              onClick={() => router.back()}
            >
                <img src="/header-back-icon.svg" alt="Back Illustration"/>
            </div>

            <div 
              className="flex h-[32px] w-[32px] items-center justify-center"
              role="button" 
              aria-label="Share Item"
            >
                <img src="/share-icon.svg" alt="Share Illustration"/>
            </div>

        </header>
    )
}