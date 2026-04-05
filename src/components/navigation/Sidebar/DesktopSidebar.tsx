"use client";

import { DesktopSidebarProps } from "./types";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import React from "react";
import { Button } from "@/components/ui/Button/Button";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "🏠", href: "/dashboard" },
  { label: "Analytics", icon: "📊", href: "/analytics" },
];

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <aside
      className={clsx(
        styles.sidebar,
        styles.desktop,
        isCollapsed && styles.collapsed
      )}
    >
      {/* Header / Toggle */}
      <div className={styles.header}>
        <Button
          variant="ghost"
          onClick={onToggleCollapse}
          className={styles.toggle}
        >
          {isCollapsed ? "→" : "←"}
        </Button>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={styles.item}>
                <span className={styles.icon}>{item.icon}</span>

                {!isCollapsed && (
                  <span className={styles.label}>{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};