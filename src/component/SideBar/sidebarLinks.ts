import { SidebarRoutes } from "@/component/SideBar/routes";
import {
  Home,
  MoneyRecive,
  MoneySend,
  Profile,
  Profile2User,
  Setting2,
  Wallet,
} from "iconsax-reactjs";
import { ISidebarLinkItem } from "./sidebar.types";

export const sidebarLinks: ISidebarLinkItem[] = [
  {
    title: "Home",
    seo: {
      title: "Overview",
      description: "Access a quick summary and insights about the application",
    },
    pathname: SidebarRoutes.dashboard,
    icon: Home,
  },
  {
    title: "Wallet",
    seo: {
      title: "Wallet Management",
      description:
        "View and manage your available balance, transactions, and wallet activity",
    },
    pathname: SidebarRoutes.wallet,
    icon: Wallet,
  },
  {
    title: "Profile",
    seo: {
      title: "My Profile",
      description:
        "Manage your personal details, security preferences, and account settings",
    },
    pathname: SidebarRoutes.profile,
    icon: Profile,
  },
  {
    title: "Inbound Payments",
    seo: {
      title: "Inbound Payments",
      description: "Monitor all received payments and transaction records",
    },
    pathname: SidebarRoutes.inBoundPayments,
    icon: MoneyRecive,
  },
  {
    title: "Outbound Payments",
    seo: {
      title: "Outbound Payments",
      description: "Track and manage all sent payments and disbursements",
    },
    pathname: SidebarRoutes.outBoundPayments,
    icon: MoneySend,
  },
  {
    title: "Users & Roles",
    seo: {
      title: "User and Role Management",
      description: "Control access by managing users, roles, and permissions",
    },
    pathname: SidebarRoutes.usersAndRoles,
    icon: Profile2User,
  },
  {
    title: "Settings",
    seo: {
      title: "Application Settings",
      description:
        "Customize application preferences and configuration settings",
    },
    pathname: SidebarRoutes.settings,
    icon: Setting2,
  },
];
