import {
  ArrowDownLeftDashIcon,
  ArrowUpRightDashIcon,
  BanknoteIcon,
  DashboardGridIcon,
  RepeatIcon,
  SendIcon,
  ShieldCheckDashIcon,
  UserIcon,
  WalletIcon,
} from "../components/DashboardIcons";

export const dashboardUser = {
  name: "Soma",
  handle: "voya.me/soma",
  tier: "Verified creator",
};

export const balances = [
  {
    label: "Available balance",
    value: "$8,238.55",
    trend: "+12.5%",
    detail: "Across all wallets",
    tone: "primary",
  },
  {
    label: "Pending inflow",
    value: "$1,420.00",
    trend: "4 transfers",
    detail: "Expected today",
    tone: "soft",
  },
  {
    label: "Savings vault",
    value: "$3,900.20",
    trend: "+$320",
    detail: "This month",
    tone: "light",
  },
];

export const quickActions = [
  {
    label: "Add Money",
    description: "Fund your Voya balance",
    icon: BanknoteIcon,
    href: "/wallet/wallet",
  },
  {
    label: "Send",
    description: "Pay a contact quickly",
    icon: SendIcon,
    href: "/wallet/wallet",
  },
  {
    label: "Convert",
    description: "Swap USDT and fiat",
    icon: RepeatIcon,
    href: "/wallet/convertToken",
  },
  {
    label: "Withdraw",
    description: "Move funds to bank",
    icon: ArrowUpRightDashIcon,
    href: "/wallet/wallet",
  },
];

export const activityItems = [
  {
    id: "act-1",
    title: "Payment from Michael",
    meta: "Today, 10:24 AM",
    amount: "+$840.00",
    status: "Completed",
    icon: ArrowDownLeftDashIcon,
    tone: "credit",
  },
  {
    id: "act-2",
    title: "USDT conversion",
    meta: "Today, 9:12 AM",
    amount: "-$350.00",
    status: "Processing",
    icon: RepeatIcon,
    tone: "swap",
  },
  {
    id: "act-3",
    title: "Withdrawal to GTBank",
    meta: "Yesterday, 5:48 PM",
    amount: "-$1,200.00",
    status: "Completed",
    icon: ArrowUpRightDashIcon,
    tone: "debit",
  },
  {
    id: "act-4",
    title: "Vault contribution",
    meta: "Yesterday, 2:15 PM",
    amount: "-$150.00",
    status: "Saved",
    icon: ShieldCheckDashIcon,
    tone: "safe",
  },
];

export const sidebarItems = [
  { label: "Home", icon: DashboardGridIcon, href: "/dashboard", active: true },
  { label: "Activity", icon: WalletIcon, href: "/dashboard#activity" },
  { label: "Profile", icon: UserIcon, href: "/dashboard#profile" },
];
