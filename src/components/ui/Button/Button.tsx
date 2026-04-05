"use client";

import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./types";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.loading]: loading,
        },
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className={styles.spinner} />
      ) : (
        <>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
          <span className={styles.content}>{children}</span>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};