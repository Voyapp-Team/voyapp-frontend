

export default function withdrawalInputValidation(details){
   const errors = {};

   const numRegex = /^[0-9]{10}$/

   if("input" in details){
      const input = details.input.trim();

      if(!input){
         errors.accountNumError = " Enter an account number"
         
      }else if(!numRegex.test(input)){
         errors.accountNumError= "Invalid account number"     
      }
   }

   if("bank" in details){
      const bank = details.bank;
      if(!bank){
         errors.bankNameError = "Please select a bank";
      }
   }

   if("amount" in details){
      const amount = details.amount;
      const amountRegex = /^[0-9]/
      if(!amount){
         errors.amountError= "Please, enter an amount."
      }
       
      if(!amountRegex.test(amount)){
         errors.amountError= "Invalid amount inputed"
      }

      if(Number(amount) < 10){
         errors.amountError= "Please, enter an amount greater than 10."
      }
      
   }

   if("otp" in details){
      const otp = details.otp;
      const otpRegex = /^[0-9]/

     

      if(!otpRegex.test(otp)){
         errors.otpError = "Invalid OTP inputed"
      }

      if(otp !=="1234"){
         errors.otpError = "OTP is incorrect"
      }
   }

  return errors;
}