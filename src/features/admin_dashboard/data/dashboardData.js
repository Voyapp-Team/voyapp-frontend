import { RepeatIcon } from '../../dashboard/components/DashboardIcons';
import {
  BanknoteIcon,
  BlockedIcon,
  NotificationIcon,
  SettingsIcon,
  ShieldIcon,
  ShieldUserIcon,
  SupportIcon,
  TransactionsIcon,
  UserPlusIcon,
  Users,
  Wallet2Icon,
  WalletIcon,
} from '../components/DashboardIcons';

export const dashboardUser = {
  name: "James Chanor",
  role: "Super Admin Access",
};

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

export const usersDetails = [
  {
    label: "Total Users",
    icon: Users,
    details: "124.5",
    trend_value: "8.4%",
    comment: "last month",
  },
  {
    label: "New Users Today",
    icon: UserPlusIcon,
    details: "1,240",
    trend_value: "12%",
    comment: "yesterday",
  },
  {
    label: "Suspended Users",
    icon: BlockedIcon,
    details: "42",
    trend_value: "2%",
    comment: "decreasing",
  },
  {
    label: "Active Wallets",
    icon: Wallet2Icon,
    details: "98",
    trend_value: "4.7%",
    comment: "stable growth",
  },
];

export const UsersInformation = [
  {
    first_name: "Erik",
    last_name: "Johansson",
    user_name: "erik.j",
    email: "erik.j@voya.io",
    account_type: "Freelancer",
    kyc_status: "Verified",
    balance: "12,450.00",
    transactions_count: 154,
    date_in: "Oct 12, 2023",
    status: "active",
  },
  {
    first_name: "Sarah",
    last_name: "Miller",
    user_name: "sarahm",
    email: "miller@corp.net",
    account_type: "Business",
    kyc_status: "Pending",
    balance: "45,200.00",
    transactions_count: 892,
    date_in: "Nov 05, 2023",
    status: "active",
  },
  {
    first_name: "Mark",
    last_name: "Kozlov",
    user_name: "mkozlov",
    eamil: "mark@mail.ru",
    account_type: "Freelancer",
    kyc_status: "Failed",
    balance: "120.50",
    transactions_count: 12,
    date_in: "Dec 01, 2023",
    status: "inActive",
  },
  {
    first_name: "Lena",
    last_name: "Fischer",
    user_name: "lfisch",
    eamil: "lena.f@web.de",
    account_type: "Freelancer",
    kyc_status: "Verified",
    balance: "3,150.00",
    transactions_count: 42,
    date_in: "Nov 28, 2023",
    status: "active",
  },
];
