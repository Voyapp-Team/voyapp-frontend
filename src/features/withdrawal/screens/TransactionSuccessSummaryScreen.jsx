"use client";

import TransactionSuccessSummary from "../components/TransactionSuccessSummary";
import { useState, useEffect } from "react";


export default function TransactionSuccessSummaryScreen() {
    const [dateTime, setDateTime] = useState("");
    
    useEffect(() => {
    setDateTime(
        `${new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        })} • ${new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        })}`
    );
    }, []);

    return (
        <div className=" flex flex-col items-center w-full max-w-[542px] min-h-screen bg-[#FFFFFF1A] md:rounded-[50px]  px-[24px] pt-[98px] pb-[20px]">    
            <TransactionSuccessSummary dateTime={dateTime} />
        </div>
    )
}