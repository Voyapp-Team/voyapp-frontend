

export default function accountInputValidation(details){
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

  return errors;
}