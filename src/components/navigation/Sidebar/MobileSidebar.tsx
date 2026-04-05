"use client";

import { MobileSidebarProps } from "./types";
import styles from "./Sidebar.module.css";
import React from "react";

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Drawer */}
      <aside className={styles.mobileSidebar}>
        <button onClick={onClose} className={styles.close}>
          ✕
        </button>

        <nav className={styles.nav}>
          <div className={styles.item}>🏠 Dashboard</div>
          <div className={styles.item}>📊 Analytics</div>
        </nav>
      </aside>
    </>
  );
};