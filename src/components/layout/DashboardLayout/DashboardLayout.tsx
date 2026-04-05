"use client";

import { useState } from "react";
import { DashboardLayoutProps } from "./types";
import styles from "./DashboardLayout.module.css";
import { DesktopSidebar } from "@/components/navigation/Sidebar/DesktopSidebar";
import { MobileSidebar } from "@/components/navigation/Sidebar/MobileSidebar";
import { TopNav } from "@/components/navigation/TopNav/TopNav";

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
  <div className={styles.container}>
    <TopNav onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />

    <div className={styles.main}>
      <DesktopSidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
      />

      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <main className={styles.content}>{children}</main>
    </div>
  </div>
);
};