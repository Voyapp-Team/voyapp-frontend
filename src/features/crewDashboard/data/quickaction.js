import {
  Scissors,
  Share2,
  UserPlus,
} from 'lucide-react';

export const QuickActions = [
  {
    label: "Share Link",
    icon: Share2,
    href: "/voya-popUp",
  },
  {
    label: "Add Member",
    icon: UserPlus,
    href: "/add-crew-member",
  },
  {
    label: "Edit Splits",
    icon: Scissors,
    href: "/set-split",
  },
];
