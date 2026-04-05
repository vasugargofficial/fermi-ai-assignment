"use client";

import { TopNavProps } from "./types";
import styles from "./TopNav.module.css";

import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";

export const TopNav = ({ onOpenMobileSidebar }: TopNavProps) => {
  return (
    <header className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <button onClick={onOpenMobileSidebar} className={styles.hamburger}>
          ☰
        </button>
        <span className={styles.logo}>Dashboard</span>
      </div>

      {/* Center */}
      <div className={styles.center}>
        <Input label="Search" />
      </div>

      {/* Right */}
      <div className={styles.right}>
        <Button variant="ghost">Theme</Button>
        <div className={styles.avatar}>U</div>
      </div>
    </header>
  );
};