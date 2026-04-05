"use client";

import { TopNavProps } from "./types";
import styles from "./TopNav.module.css";
import { Button } from "@/components/ui/Button/Button";
import { useTheme } from "@/hooks/useTheme";

export const TopNav = ({ onOpenMobileSidebar }: TopNavProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <button onClick={onOpenMobileSidebar} className={styles.hamburger}>
          ☰
        </button>
        <span className={styles.title}>Dashboard</span>
      </div>

      {/* Center */}


      {/* Right */}
      <div className={styles.right}>
        <Button variant="ghost" onClick={toggleTheme}>
          Switch to {theme === "dark" ? "light" : "dark"}
        </Button>
        <div className={styles.avatar}>Profile</div>
      </div>
    </header>
  );
};