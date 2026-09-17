import { RepeatIcon } from '../../dashboard/components/DashboardIcons';
import {
  BanknoteIcon,
  NotificationIcon,
  SettingsIcon,
  ShieldIcon,
  ShieldUserIcon,
  SupportIcon,
  TransactionsIcon,
  Users,
  WalletIcon,
} from '../components/DashboardIcons';

export const dashboardUser = {
  name: "James Chanor",
  role: "Super Admin Access",
};

// export const quickActions = [
//   {
//     label: "Request a Payment",
//     description: "Share a payment link",
//     icon: BanknoteIcon,
//     href: "/dashboard/request-payment",
//     featured: true,
//   },
//   {
//     label: "Recurring",
//     description: "Repeat a payment",
//     icon: RepeatIcon,
//     href: "/dashboard/setup-automatic-payment",
//   },
//   {
//     label: "Crew",
//     description: "Group recipients",
//     icon: CrewIcon,
//     href: "/onboarding/login/crew",
//   },
//   {
//     label: "Convert",
//     description: "Swap currencies",
//     icon: ConvertIcon,
//     href: "/dashboard/wallet/convertToken",
//   },
// ];

export const dashboardItems = [
  { label: "Users", icon: Users, href: "/admin-dashboard", active: true },
  {
    label: "Transactions",
    icon: TransactionsIcon,
    href: "/dashboard/transactions",
  },
  {
    label: "KYC Management",
    icon: ShieldIcon,
    href: "/dashboard/kyc-management",
  },
  {
    label: "Wallet Overview",
    icon: WalletIcon,
    href: "/dashboard/wallet-overview",
  },
  {
    label: "Crew Payments",
    icon: BanknoteIcon,
    href: "/dashboard/crew-payments",
  },
  { label: "Support", icon: SupportIcon, href: "/dashboard/support" },
  { label: "Revenue", icon: BanknoteIcon, href: "/dashboard/revenue" },
];
export const systemItems = [
  {
    label: "Notifications",
    icon: NotificationIcon,
    href: "/admin-dashboard/notifications",
  },
  {
    label: "Audit Log",
    icon: RepeatIcon,
    href: "/dashboard/audit-log",
  },
  {
    label: "Admin Team",
    icon: ShieldUserIcon,
    href: "/dashboard/admin-teams",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/dashboard/settings",
  },
];
