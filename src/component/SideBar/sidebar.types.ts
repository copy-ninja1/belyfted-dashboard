import { Icon } from "iconsax-reactjs";
import { SidebarRoutes } from "./routes";

export interface ISidebarLinkItem {
  title: string;
  pathname: SidebarRoutes;
  icon: Icon;
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface ISideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface ISidebarLinkProps extends ISidebarLinkItem, ISideBarProps {
  isSnapped: boolean;
  focused: boolean;
}
