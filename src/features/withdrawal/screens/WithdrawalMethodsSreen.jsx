"use client";
import BalanceCard from "../components/BalanceCard";
import WithdrawalMethods from "../components/WithdrawalMethods";
import { useState } from "react";

export default function WithdrawalMethodsScreen() {
    const [viewBalance, setViewBalance] = useState(false);
    const toggleBalanceVisibility = () => {
        setViewBalance((prev) => !prev);
    };
  return (
    <div className=" flex flex-col items-center w-full max-w-[700px] bg-white md:rounded-[50px]  px-4 py-8">
        <BalanceCard 
          balance={1234.56}
          onToggleBalanceVisibility={toggleBalanceVisibility}
          viewBalance={viewBalance}
        />
        <WithdrawalMethods />
      
    </div>
  );
}