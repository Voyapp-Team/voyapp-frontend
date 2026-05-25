"use client";

import { useRef, useState } from "react";

export default function OtpInput({ length = 6, onChange }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  function handleChange(index, event) {
    const val = event.target.value.replace(/\D/g, "").slice(-1);
    const next = [...values];
    next[index] = val;
    setValues(next);
    onChange?.(next.join(""));

    if (val && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  function handlePaste(event) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    const next = Array(length).fill("");
    pasted.split("").forEach((char, index) => {
      next[index] = char;
    });
    setValues(next);
    onChange?.(next.join(""));
    inputs.current[Math.min(pasted.length, length - 1)]?.focus();
  }

  return (
    <div className="flex justify-between gap-2.5" role="group" aria-label="One-time password input">
      {values.map((val, index) => (
        <input
          key={index}
          ref={(element) => {
            inputs.current[index] = element;
          }}
          type="password"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={index === 0 ? handlePaste : undefined}
          aria-label={`Digit ${index + 1} of ${length}`}
          className="h-16 w-12 min-w-0 rounded-xl bg-[#F6F3F2] text-center text-base font-bold text-[#1a1a1a] outline-none transition-all duration-150 focus:bg-white focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:shadow-[0_0_0_4px_rgba(0,194,168,0.12)]"
        />
      ))}
    </div>
  );
}
