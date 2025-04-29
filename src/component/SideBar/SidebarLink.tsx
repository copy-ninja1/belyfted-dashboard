"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ISidebarLinkProps } from "./sidebar.types";
import styles from "./index.module.css";

export const SidebarLink: React.FC<ISidebarLinkProps> = ({
  pathname,
  title,
  icon: Icon,
  isSnapped,
  focused,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const navigationPathname = usePathname();

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const isActive =
    navigationPathname === pathname ||
    (pathname.split("/").length > 2 &&
      (navigationPathname === pathname ||
        navigationPathname.includes(pathname)));

  return (
    <Link
      href={pathname}
      onClick={closeSidebar}
      className={`${styles["text-white"]} ${styles["sidebar-link"]} ${
        isActive ? styles.active : ""
      }`}
    >
      {Icon && (
        <Icon
          className={`${styles["sidebar-link-icon"]} ${
            isActive ? styles["active-icon"] : ""
          }`}
          color={isActive || focused ? "#F39C12" : "white"}
          variant={isActive || focused ? "Bold" : "Outline"}
        />
      )}
      <div
        className={`${styles["sidebar-link-text"]} ${
          isSnapped ? styles["hidden-text"] : styles["visible-text"]
        }`}
      >
        {title}
      </div>
    </Link>
  );
};
