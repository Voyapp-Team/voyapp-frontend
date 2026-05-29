"use clents"
import { formattedCurrency } from "../utils/formattedCurrency"
export default function CryptoTransferDetailsSummary({amount}) {
    return(
        <div className="w-full bg-[#F0EDEC] p-6 mt-6 rounded-2xl">
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Your Withdraw</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">{formattedCurrency(Number(amount), "en-US", "USD")}</p>
            </div>
            <div className="flex justify-between items-center my-3">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Fee</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">$1.60</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Rate</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">$1 = ₦1,540</p>
            </div>
        </div>
    )
}    