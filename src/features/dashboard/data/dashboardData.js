import {
  ArrowDownLeftDashIcon,
  BanknoteIcon,
  CarChargeIcon,
  ConvertIcon,
  CrewIcon,
  DashboardGridIcon,
  RepeatIcon,
  SendIcon,
  ShieldCheckDashIcon,
  SidebarCrewIcon,
  SubscriptionIcon,
  UserIcon,
  WalletIcon,
} from '../components/DashboardIcons';

export const dashboardUser = {
  name: "Soma",
  handle: "voya.me/somadina",
  tier: "Verified creator",
};

export const balances = [
  {
    label: "Your Balance",
    value: "$1,240.50",
    detail: "≈  ₦1,914,772",
    tone: "primary",
    actions: [
      { label: "Withdraw", href: "/dashboard/withdrawal", variant: "solid" },
      { label: "Add Money", href: "/dashbord/add-money", variant: "ghost" },
    ],
  },
];

export const quickActions = [
  {
    label: "Request a Payment",
    description: "Share a payment link",
    icon: BanknoteIcon,
    href: "/dashboard/request-payment",
    featured: true,
  },
  {
    label: "Recurring",
    description: "Repeat a payment",
    icon: RepeatIcon,
    href: "/dashboard/setup-automatic-payment",
  },
  {
    label: "Crew",
    description: "Group recipients",
    icon: CrewIcon,
    href: "/onboarding/login/crew",
  },
  {
    label: "Convert",
    description: "Swap currencies",
    icon: ConvertIcon,
    href: "/dashboard/wallet/convertToken",
  },
];

export const activityItems = [
  {
    id: "act-1",
    title: "Michael Crew",
    meta: "Yesterday, 9:20 AM",
    amount: "+$450.00",
    status: "Completed",
    icon: ArrowDownLeftDashIcon,
    tone: "credit",
  },
  {
    id: "act-2",
    title: "James Martins",
    meta: "Yesterday, 9:21 AM",
    amount: "+$150.00",
    status: "Completed",
    icon: ArrowDownLeftDashIcon,
    tone: "credit",
  },
  {
    id: "act-3",
    title: "Tesla Charging",
    meta: "Dec 12, 6:12 PM",
    amount: "-$12.50",
    status: "Completed",
    icon: CarChargeIcon,
    tone: "debit",
  },
  {
    id: "act-4",
    title: "Subscription",
    meta: "Dec 10, 10:00 AM",
    amount: "-$14.99",
    status: "Saved",
    icon: SubscriptionIcon,
    tone: "safe",
  },
  {
    id: "act-5",
    title: "Amaquon Refund",
    meta: "Dec 08, 1:30 PM",
    amount: "+$82.35",
    status: "Completed",
    icon: ArrowDownLeftDashIcon,
    tone: "credit",
  },
  {
    id: "act-6",
    title: "Split pay request",
    meta: "May 24, 1:05 PM",
    amount: "-$92.50",
    status: "Completed",
    icon: SendIcon,
    tone: "debit",
  },
  {
    id: "act-7",
    title: "Recurring payment",
    meta: "May 23, 11:40 AM",
    amount: "-$75.00",
    status: "Processing",
    icon: RepeatIcon,
    tone: "swap",
  },
  {
    id: "act-8",
    title: "Payment from Ada",
    meta: "May 22, 6:18 PM",
    amount: "+$260.00",
    status: "Completed",
    icon: ArrowDownLeftDashIcon,
    tone: "credit",
  },
  {
    id: "act-9",
    title: "Card top up",
    meta: "May 21, 9:22 AM",
    amount: "+$500.00",
    status: "Completed",
    icon: BanknoteIcon,
    tone: "credit",
  },
  {
    id: "act-10",
    title: "Security hold",
    meta: "May 20, 4:42 PM",
    amount: "-$110.00",
    status: "Saved",
    icon: ShieldCheckDashIcon,
    tone: "safe",
  },
];

export const sidebarItems = [
  { label: "Home", icon: DashboardGridIcon, href: "/dashboard", active: true },
  { label: "Activity", icon: WalletIcon, href: "/dashboard/recent-activity" },
  { label: "Crew", icon: SidebarCrewIcon, href: "/dashboard#crew" },
  { label: "Profile", icon: UserIcon, href: "/dashboard#profile" },
];
