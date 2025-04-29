"use client";
import React, { useState } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Sidebar from "@/component/SideBar";
import Header from "@/component/Header";
import { sidebarLinks } from "@/component/SideBar/sidebarLinks";
import styles from "@/layout/appLayout.module.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const navigationPathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentPath = sidebarLinks.find(
    (link) => link.pathname === navigationPathname
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{currentPath?.seo?.title || currentPath?.title}</title>
        <meta
          property="og:title"
          content={currentPath?.seo?.title || currentPath?.title}
          key="title"
        />
      </Head>
      <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
      <div className={styles.containerWrapper}>
        <Header
          title={currentPath?.seo?.title || currentPath?.title || "Belyfted"}
          sidebarOpen={isSidebarOpen}
          setSidebarOpen={setIsSidebarOpen}
        />
        <main>
          <div className={styles.bodywrapper}>{children}</div>
        </main>
      </div>
    </div>
  );
}
