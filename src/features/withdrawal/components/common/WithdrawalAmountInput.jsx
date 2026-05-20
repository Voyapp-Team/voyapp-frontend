"use clients";

export default function WithdrawalAmountInput({isCryto}) {
    
    return (
        <div className=" flex flex-col items-center w-full max-w-[448px] bg-white md:rounded-[50px]  px-[24px] pt-[98px] pb-[48px]">
            <h2 className=" text-[24px] leading-[32px] tracking-[-0.5px] font-extrabold font-montserrat text-[#000006] mb-4">How much do you want to withdraw?</h2>
            <p className="text-center text-[14px] leading-6 tracking-[-0.5px]
                font-manrope text-[#00000699] mb-8"> Available balance: {"₦1,914,772.00"} 
            </p>

            {/* Withdrawal amount input field */}
            <div className="w-full max-w-[400px] mb-6">
                
                <input
                    type="number"
                    id="withdrawalAmount"
                    placeholder="Enter amount"
                    className="bg-[#F3F4F6] border border-[#D1D5DB] text-[#000006] placeholder:text-[#6B7280] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <img className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" src="/withdrawal/mdi_currency-ngn.svg" alt="Naira Icon" />
            </div>

            {isCryto && (
               <input type="text" id="walletAddress" placeholder="Enter wallet address" className="bg-[#F3F4F6] border border-[#D1D5DB] text-[#000006] placeholder:text-[#6B7280] focus:ring-2 focus:ring-blue-500 focus:outline-none w-full max-w-[400px]" />
            )}

        </div>
    )
}