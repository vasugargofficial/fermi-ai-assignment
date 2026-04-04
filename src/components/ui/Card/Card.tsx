import React from "react";
import styles from "./Card.module.css";
import clsx from "clsx";
import { CardProps } from "./types";

const CardRoot: React.FC<CardProps> = ({
  children,
  variant = "default",
  className,
}) => {
  return (
    <div className={clsx(styles.card, styles[variant], className)}>
      {children}
    </div>
  );
};


const CardHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.header}>{children}</div>;
};

const CardBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.body}>{children}</div>;
};

const CardFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.footer}>{children}</div>;
};


export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});