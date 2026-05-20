"use client";

export default function BankTransferDetailSummary({bank, accountNumber}) {
        const formattedAccountNumber = accountNumber ? `${accountNumber.slice(0, 4)} **** ${accountNumber.slice(-4)}` : "••••••••••";
    return ( 
        <div className=" bg-[#F0EDEC] p-6 rounded-2xl  mt-30">
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Service Fee</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">₦100.00</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Arrival Time</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#006B5C]">Instant</p>
            </div>

            <div>
                <h3>YOU RECEIVE</h3>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">₦1,914,672.00</p>
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]"> <img src="/withdrawal/mdi_fast-forward.svg" alt="Express Icon" />EXPRESS</p>
            </div>
            <div>
                <img src="/withdrawal/info-icon.svg" alt="Info Icon" className="inline-block mr-2" />
                <div>
                    <p>JOHN ADEYEMI - UBA -  0123456789</p>
                    <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Estimated arrival less than 1 min to your linked account.</p>   
                </div>
            </div>
        </div>   
    )
}