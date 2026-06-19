"use client"

import { useState } from "react";

export default function useHandleCopy () {
    const [copied, setCopied] = useState(false);
   

    const handleCopy = async (value) => {
        await navigator.clipboard.writeText(value);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return {handleCopy, copied};
}