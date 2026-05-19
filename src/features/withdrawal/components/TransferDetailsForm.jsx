"use client";
import Button from "@/src/components/ui/Button";

export default function TransferDetailsForm() {
    const bank = "GTBank";
    const accountName = "John Doe";
    const bankOptions = ["Choose a bank","GTBank", "Access Bank", "Zenith Bank", "First Bank", "UBA"];  
  return (
    <form className="flex flex-col w-full  bg-white md:rounded-[50px]">
      <h2 className="text-[30px] font-extrabold font-plusJakartaSans leading-[37.5px] text-[#1C1B1B] tracking-[-0.75px]">Transfer Details</h2>
      <p className="text-[16px] text-[#3C4A46] font-medium font-manrope leading-6  mb-8">Specify where you'd like to receive your funds within Nigeria.</p>
      

      <div className="w-full max-w-[400px] mb-4">
        <label className="block text-[14px] font-semibold font-manrope leading-5 text-[#3C4A46] mb-2" htmlFor="bankName">Select Bank</label>
        <select id="bankName" name="bankName" className="w-full text-[#1C1B1B] border-0 bg-[#F6F3F2] px-[16px]  py-[8px] rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#00C2A8]">
            {bankOptions.map((option, index) => (
                <option key={index} value={index===0 ? "" : option} className="text-[18px] font-bold leading-[100%] font-montserrat">{option}</option>
            ))}
        </select>
      </div>

      <div className="w-full max-w-[400px]">
        <label className="block text-[14px] font-semibold font-manrope leading-5 text-[#3C4A46] mb-2" htmlFor="accountNumber">Account Number</label>
        <input type="text" id="accountNumber" name="accountNumber" className=" text-[18px] font-bold leading-[100%] w-full px-[16px] py-[15px] text-[#1C1B1B] bg-[#F6F3F2] font-montserrat  rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#00C2A8] placeholder:text-[#D4D4D8]" placeholder="0123456789"  />
      </div>

      <div className="flex gap-4 bg-[#65FADE33] p-4 rounded-xl my-4 items-center">
        <img src="/withdrawal/confirm-icon.svg" alt="Confirm Transfer Details Illustration" className="  " />  
        <div className="">
            <p className="font-montserrat font-bold text-[12px] leading-4 traxking-[0.6px] text-[#006B5C]">RECIPIENT VERIFIED</p> 
            <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">CONFIRMED: {accountName} - {bank}</p>
        </div>
      </div>

      <div className="flex bg-[#F0EDEC] p-4 rounded-xl gap-4">
         <img src="/withdrawal/save-icon.svg" alt="Save Transfer Details Illustration" className="cursor-pointer" />
         <p className="font-manrope font-semibold text-[16px] leading-6 text-[#1C1B1B]">Save for future withdrawals</p>
         <div role ="button" className="w-[44px] h-[24px] border rounded-full bg-[#FFFFFF] flex items-center justify-left cursor-pointer p-1 ml-auto">
            <span className="inline-flex border w-5 h-5 bg-[#C3C3C3] rounded-full"></span>
         </div>
       </div>

       <div className=" bg-[#F0EDEC] p-6 rounded-2xl  mt-30">
           <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Estimated Fee</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#1C1B1B]">₦100.00</p>
           </div>
            <div className="flex justify-between items-center">
                <p className="font-manrope font-medium text-[14px] leading-5 text-[#3C4A46]">Arrival Time</p>
                <p className="font-montserrat font-bold text-[16px] leading-6 text-[#006B5C]">Instant</p>
            </div>
       </div>

        <Button variant="primary" className="mt-8">
            Withdraw Funds {">"} 
        </Button>
       
    </form>
  );
}