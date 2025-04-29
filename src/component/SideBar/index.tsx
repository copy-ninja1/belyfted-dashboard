"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import Image from "next/image";
import { motion } from "framer-motion";

import { sidebarLinks } from "./sidebarLinks";
import { SidebarLink } from "./SidebarLink";

import styles from "./index.module.css";

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [isSnapped, setIsSnapped] = useState<boolean>(false);
  const [focused, setFocused] = useState<string | null>(null);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const toggleSnapped = useCallback(() => {
    setIsSnapped((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  useEffect(() => {
    const clickOutsideHandler = ({ target }: MouseEvent) => {
      if (
        sidebarOpen &&
        !sidebarRef.current?.contains(target as Node) &&
        !backdropRef.current?.contains(target as Node)
      ) {
        closeSidebar();
      }
    };

    const keyHandler = ({ key }: KeyboardEvent) => {
      if (sidebarOpen && key === "Escape") {
        closeSidebar();
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [sidebarOpen, closeSidebar]);

  return (
    <>
      {sidebarOpen && (
        <div
          ref={backdropRef}
          className={styles["sidebar-backdrop"]}
          onClick={closeSidebar}
        />
      )}

      <aside
        ref={sidebarRef}
        className={`${styles["sidebar-container"]} ${
          sidebarOpen ? styles["open"] : styles["closed"]
        } ${
          isSnapped
            ? styles["animate-sidebar-width-snap"]
            : styles["animate-sidebar-width-inc"]
        }`}
      >
        <div className={styles["sidebar-header"]}>
          <Link href="/" className={styles["sidebar-logo-link"]}>
            {isSnapped ? (
              <Image
                src="/logo-small.png"
                width={31}
                height={30}
                alt="Logo"
                className={styles["sidebar-logo"]}
              />
            ) : (
              <Image
                src="/logo.png"
                width={114.86}
                height={37.69}
                alt="Logo"
                className={styles["sidebar-logo"]}
              />
            )}
          </Link>
          <button
            aria-label="switch-nav"
            onClick={toggleSnapped}
            className={styles["sidebar-icon-button"]}
          >
            {isSnapped ? (
              <ArrowRight2 className={styles["sidebar-icon"]} />
            ) : (
              <ArrowLeft2 className={styles["sidebar-icon"]} />
            )}
          </button>
        </div>

        <div className={styles["sidebar-content"]}>
          <nav
            className={styles["sidebar-nav"]}
            onMouseLeave={() => setFocused(null)}
          >
            <ul
              className={`${styles["sidebar-links"]} ${
                isSnapped ? styles["snapped-links"] : ""
              }`}
            >
              {sidebarLinks.map((link) => (
                <li
                  key={link.pathname}
                  onMouseEnter={() => setFocused(link.title)}
                  className={` ${styles["sidebar-link-item"]}`}
                >
                  <SidebarLink
                    pathname={link.pathname}
                    title={link.title}
                    icon={link.icon}
                    focused={focused === link.title}
                    isSnapped={isSnapped}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={closeSidebar}
                  />
                  {focused === link.title && (
                    <motion.div
                      transition={{
                        layout: { duration: 0.2, ease: "easeOut" },
                      }}
                      className={`${styles["sidebar-link-highlight"]}`}
                      layoutId="highlight"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
