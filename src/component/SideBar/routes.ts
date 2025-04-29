export const SidebarRoutes = {
  dashboard: "/",
  wallet: "/wallet",
  profile: "/profile",
  inBoundPayments: "/in-bound-Payments",
  outBoundPayments: "/out-bound-payments",
  usersAndRoles: "/users-roles",
  settings: "/settings",
} as const;

export type SidebarRoutes = (typeof SidebarRoutes)[keyof typeof SidebarRoutes];
