"use clents"

export default function CryptoTransferDetailsSummary() {
    return(
        <div className=" bg-[#F0EDEC] p-6 rounded-2xl  mt-30">
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Service Fee</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">₦100.00</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Arrival Time</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#006B5C]">Instant</p>
            </div>
        </div>
    )
}    