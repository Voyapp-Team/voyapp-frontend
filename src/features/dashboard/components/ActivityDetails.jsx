"use client"
import useHandleCopy from "../../../hooks/useHandleCopy"

export default function ActivityDetails (){
  const {handleCopy, copied} = useHandleCopy();
    
    const sendDetails = [
        {label:"From", value:"Alex Thompson", extraValue:"alex.t@voya.pay"},
        {label:"Note", value:"Freelance UI Design - Oct"},
        {label:"Date", value:"October 24, 2026"},
        {label:"Time", value:"02:45 PM"},

    ]

    const receiveDetails = [
        {label:"Token Received", value:"124.50ETH"},
        {label:"Coversion Rate", value:"1 USD = 0.83ETH"},
        {label:"Network", value:"Ethereum"},
        {label:"Transaction ID", value:"8x7f...a23e4"},
        {label:"Status", value:"Confirmed on chain"},
        
    ]

    return(
        <section className="max-w-[480px] m-auto mb-8">
            <div className="my-6">
                <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#00C2A8] m-auto mb-6">
                    <img src="/completed-icon.svg"  alt="Transaction completed illustration"/>
                </div>
                <p className="font-manrope font-bold text-[14px] leading-5 tracking-[1.4px] text-[#006B5C] text-center mb-6 ">COMPLETED</p>
                <p className="font-manrope font-extrabold text-[48px] leading-[48px] tracking-[-1.2px] text-[#1C1B1B] text-center ">$200.00</p>
            </div>

            <div className="bg-[#ffffff] py-[40px] px-[32px] rounded-[32px] mb-7">
                <div className="border-b">
                {sendDetails.map(detail => (
                    <div key={detail.label} className="flex  gap-6 justify-between mb-4">
                        <p className="font-manrope font-medium text-[14px] leading-5 text-[#71717A] ">{detail.label}</p>
                        <div>
                            <p className="font-manrope font-bold text-[16px] leading-6 text-[#1C1B1B] ">{detail.value}</p>
                            {detail.extraValue && <p className="font-manrope  text-[12px] leading-4 text-[#A1A1AA]" >{detail.extraValue}</p>}
                        </div>
                 
                    </div>
                ))}
                </div>

                <div>
                {receiveDetails.map(detail => (
                    <div key={detail.label} className="flex  gap-6 justify-between mt-4">
                        <p className="font-manrope font-medium text-[14px] leading-5 text-[#71717A] ">{detail.label}</p>
                        <div className="flex items-center gap-2 relative"> 
                            {detail.label ==="Status" && <span className="w-[8px] h-[8px] rounded-full bg-[#006B5C]"/>}
                            <p 
                              className={`font-manrope font-bold text-[16px] leading-6 text-[#1C1B1B] 
                                ${detail.label ==="Network"? "text-[12px] text-[#3B6D62] bg-[#B8EDDF] rounded-full py-[4px] px-[12px]"
                                : detail.label ==="Status"? "text-[#006B5C]" : ""}`}
                            >
                                {detail.value}
                            </p>
                            {detail.label === "Transaction ID" && 
                            <img 
                              role="button" 
                              aria-label="Copy Transaction ID" 
                              src="/copy-transaction-id-icon.svg" 
                              alt=" Copy Transaction ID Illustration"
                              onClick={()=>handleCopy(detail.value)}
                              className="cursor-pointer"
                            />}
                            {copied && detail.label ==="Transaction ID" && <p  className="absolute text-green-600 text-[10px] top-[-40%] right-[0%]">copied</p>}
                        </div>
                 
                    </div>
                ))}
                </div>
            </div>
            <button
              className="border-[2px] text-[#006B5C] border-[#BBCAC4] w-full rounded-[16px] p-3 font-bold text-[16px] leading-6 flex items-center justify-center gap-2"
            >
                <img src="/receipt-icon.svg" alt="Download Receipt Illustration"/>
                Download Receipt
            </button>
        </section>
    )
}