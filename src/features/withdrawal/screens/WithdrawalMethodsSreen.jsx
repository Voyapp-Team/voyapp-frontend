"use client";
import BalanceCard from "../components/BalanceCard";
import WithdrawalMethods from "../components/WithdrawalMethods";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WithdrawalMethodsScreen() {
  const [viewBalance, setViewBalance] = useState(false);
  const toggleBalanceVisibility = () => {
    setViewBalance((prev) => !prev);
  };
    const router = useRouter();
  
 

  return (
    <div className=" flex flex-col items-center w-full max-w-[700px] m-auto my-10 bg-white md:rounded-[50px]  px-4 py-8">
        <BalanceCard 
          balance={1234.56}
          onToggleBalanceVisibility={toggleBalanceVisibility}
          viewBalance={viewBalance}
        />
        <WithdrawalMethods />
      
    </div>
  );
}