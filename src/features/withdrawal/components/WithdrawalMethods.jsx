"use client";
import { formattedCurrency } from "../utils/formattedCurrency";
import { useRouter } from "next/navigation";

export default function WithdrawalMethods() {
    const router = useRouter();
    const localMethods = [  
        {
            name: "Nigerian Bank",
            icon:"/withdrawal/bank-icon.svg",
            arivalTime: "Arrival: Instant"
        },
        {
            name: "M-Pesa",
            icon:"/withdrawal/pesa-icon.svg",
            arivalTime: "Arrival: Instant"
        },
    ];

    const cryptoMethods = [  
        {
            name: "USDC",
            icon:"/withdrawal/usdc-icon.svg",
            balance: 800
        },
        {
            name: "ETH",
            icon:"/withdrawal/eth-icon.svg",
            balance: 1200
        },
        ,
        {
            name: "USDT",
            icon:"/withdrawal/usdt-icon.svg",
            balance: 500
        },
        ,
        {
            name: "BTC",
            icon:"/withdrawal/btc-icon.svg",
            balance: 30000
        },
    ];
  return (
    <div className="flex flex-col items-center w-full max-w-[624px]">
      <div className="w-full mt-6"> 
            <h2 className="text-[20px] leading-[28px] font-bold font-plusJakartaSans text-[#1C1B1B] mb-6">Cash Out to Local Money</h2>
           {localMethods.map((method) => (
                <div key={method.name} className="flex items-center justify-between w-full bg-[#F8F8F8] rounded-[20px] p-[20px] mb-4 cursor-pointer"
                onClick={() => router.push(`/dashboard/withdrawal/bank`)}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-[16px] bg-[#F4F4F5] rounded-[16px] ">
                            <img src={method.icon} alt={method.name} className="" />
                        </div>
                        <div>
                            <h3 className="text-[16px] leading-[24px] font-bold font-manrope text-[#1C1B1B]">{method.name}</h3>
                            <p className="text-[14px] leading-[20px]  font-normal font-manrope text-[#3C4A46]">{method.arivalTime}</p>
                        </div>
                        
                    </div>
                    <img src="/withdrawal/select-icon.svg" alt="Select" className="" />
                </div>
            ))}
      </div>

      <div className="w-full mt-6"> 
            <h2 className="text-[20px] leading-[28px] font-bold font-plusJakartaSans text-[#1C1B1B] mb-6">Send to Crypto Wallet</h2>
           {cryptoMethods.map((method) => (
                <div key={method.name} className="flex items-center justify-between w-full bg-[#F8F8F8] rounded-[20px] p-[20px] mb-4 cursor-pointer"
                 onClick={() => router.push(`/dashboard/withdrawal/${method.name.toLowerCase()}`)}
                >
                    <div className="flex items-center gap-4">
                        <img src={method.icon} alt={method.name} className="" />
                        <div>
                            <h3 className="text-[16px] leading-[24px] font-bold font-manrope text-[#1C1B1B]">{method.name}</h3>
                            <p className="text-[12px] leading-[16px]  font-normal font-manrope text-[#3C4A46]">{formattedCurrency(method.balance, "en-US", "USD")}</p>
                        </div>
                        
                    </div>
                    <img src="/withdrawal/select-icon.svg" alt="Select" className="" />
                </div>
            ))}
      </div>

      <p className=" w-full max-w-[353.83px] m-auto font-manrope text-[12px] leading-[19.5px] text-center text-[#3C4A46] mb-10">Fees may apply depending on the network and method selected. Need help with your withdrawal? <a className="text-[#0D9488] cursor-pointer font-bold leading-[100%]">Contact Support</a></p>
      
      
    </div>
  );
}