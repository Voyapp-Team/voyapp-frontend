function DashboardIconBase({ children, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
}

export function SearchIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="m20 20-4.2-4.2M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </DashboardIconBase>
  );
}

export function DashboardGridIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5v-4ZM13 5.5A1.5 1.5 0 0 1 14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4ZM13 14.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </DashboardIconBase>
  );
}

export function WalletIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16 12h4M7 8h10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </DashboardIconBase>
  );
}

export function UserIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </DashboardIconBase>
  );
}

export function BanknoteIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M4 7h16v10H4V7Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 10.5h.01M16 13.5h.01M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </DashboardIconBase>
  );
}

export function SendIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M20 4 10 14M20 4l-5 16-5-6-6-5 16-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </DashboardIconBase>
  );
}

export function RepeatIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M17 3l3 3-3 3M4 6h16M7 21l-3-3 3-3M20 18H4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </DashboardIconBase>
  );
}

export function ArrowUpRightDashIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </DashboardIconBase>
  );
}

export function ArrowDownLeftDashIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M17 7 7 17M15 17H7V9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </DashboardIconBase>
  );
}

export function ShieldCheckDashIcon({ className = "" }) {
  return (
    <DashboardIconBase className={className}>
      <path
        d="M12 21s7-3.5 7-10V6l-7-3-7 3v5c0 6.5 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </DashboardIconBase>
  );
}
