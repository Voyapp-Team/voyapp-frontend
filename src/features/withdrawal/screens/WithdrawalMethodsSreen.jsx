"use client";
import BalanceCard from "../components/BalanceCard";
import { useState } from "react";

export default function WithdrawalMethodsScreen() {
    const [viewBalance, setViewBalance] = useState(false);
    const toggleBalanceVisibility = () => {
        setViewBalance((prev) => !prev);
    };
  return (
    <div className="p-4">
        <BalanceCard 
          balance={1234.56}
          onToggleBalanceVisibility={toggleBalanceVisibility}
          viewBalance={viewBalance}
        />
      
    </div>
  );
}