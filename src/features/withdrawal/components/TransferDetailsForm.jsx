"use client";
import Button from "@/src/components/ui/Button";

export default function TransferDetailsForm() {
  return (
    <form className="flex flex-col items-center w-full max-w-[700px] bg-white md:rounded-[50px]  px-4 py-8">
      <h2 className="text-[24px] font-bold font-montserrat leading-[30px] text-center mb-6">Transfer Details</h2>
      <p className="text-[14px] font-manrope leading-[20px] text-center mb-8">Specify where you'd like to receive your funds withinNigeria.</p>
      {/* Form fields for transfer details */}

      <div className="w-full max-w-[400px] mb-4">
        <label className="block text-[14px] font-manrope leading-[20px] text-[#1C1B1B] mb-2" htmlFor="bankName">Select Bank</label>
        <select id="bankName" name="bankName" className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#00C2A8]">
          <option value="">Choose a bank</option>
          <option value="bank1">Bank 1</option>
          <option value="bank2">Bank 2</option>
          <option value="bank3">Bank 3</option>
        </select>
      </div>

      <div className="w-full max-w-[400px]">
        <label className="block text-[14px] font-manrope leading-[20px] text-[#1C1B1B] mb-2" htmlFor="accountNumber">Account Number</label>
        <input type="text" id="accountNumber" name="accountNumber" className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#00C2A8]" placeholder="Enter your account number" />
      </div>

      <div>
        <img src="/withdrawal/transfer-details-illustration.svg" alt="Transfer Details Illustration" className="w-full max-w-[400px] mt-6 mb-8" />  
        <div className="flex gap-4">
            <p>RECIPIENT VERIFIED</p>
            <p>CONFIRMED:{accountName}-{bank}</p>
        </div>
      </div>

      <div className="flex gap-4">
         <img src="/withdrawal/back-button.svg" alt="Back" className="cursor-pointer" />
         <p>Save for future withdrawals</p>
         <div role ="button" className="w-5 h-5 border rounded-sm flex items-center justify-center cursor-pointer">
            <span className="w-3 h-3 bg-[#00C2A8] rounded-sm"></span>
         </div>
       </div>

       <div>
           <div>
                <p>Estimated Fee</p>
                <p>₦100.00</p>
           </div>
            <div>
                <p>Arrival Time</p>
                <p>Instant</p>
           </div>
       </div>

        <Button variant="primary" className="mt-8">Withdraw Funds {">"} </Button>
       
    </form>
  );
}