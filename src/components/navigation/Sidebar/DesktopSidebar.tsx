"use client";

import { DesktopSidebarProps } from "./types";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import React from "react";
import { Button } from "@/components/ui/Button/Button";

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <aside
      className={clsx(
        styles.sidebar,
        isCollapsed && styles.collapsed,
        styles.desktop
      )}
    >
      {/* Toggle Button */}
      <Button variant="ghost" onClick={onToggleCollapse} className={styles.toggle}>
        {isCollapsed ? "→" : "←"}
      </Button>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.item}>
          <span className={styles.icon}>🏠</span>
          {!isCollapsed && <span>Dashboard</span>}
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>📊</span>
          {!isCollapsed && <span>Analytics</span>}
        </div>
      </nav>
    </aside>
  );
};