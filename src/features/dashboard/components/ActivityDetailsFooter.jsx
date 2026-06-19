"use client"

export default function ActivityDetailsFooter(){
    return(
        <footer className="bg-[#006B5C] relative rounded-[32px] max-w-[642.67px] m-auto p-[32px]" >
            <p className="font-plusJakartaSans font-extrabold text-[24px] leading-8 text-[#FFFFFF]">Maximize your yield</p>
            <p className="font-manrope  text-[16px] leading-6 text-[#FFFFFFCC] my-4 max-w-[309.19px]">Earn up to 12% APY on your USDC holdings with Voya Staking</p>
            <button className="bg-[#00C2A8] py-[12px] px-[24px] font-manrope font-bold text-[16px] leading-6 text-[#00493E] rounded-[12px]">Start Earning</button>
            <div
                className="
                absolute
               
                rounded-r-[30px]
                right-0
                top-1/2
                -translate-y-1/2
                w-[30%]
                h-[90%]
                bg-[radial-gradient(ellipse_at_right,#00C2A833_0%,transparent_80%)]
                "
            />
                    
        </footer>
    )
}