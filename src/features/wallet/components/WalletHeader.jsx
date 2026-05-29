import React from 'react';

const cardClasses =
  "w-full rounded-2xl p-6 text-white " +
  "border-transparent bg-[linear-gradient(180deg,var(--color-brand-primary-deep)_0%,var(--color-brand-accent)_100%)] " +
  "shadow-[0_4px_6px_rgba(0,107,92,0.1),0_10px_15px_rgba(0,107,92,0.1)]";

export default function WalletHeaderCard({ children, className = "" }) {
  return <div className={`${cardClasses} ${className}`.trim()}>{children}</div>;
}
