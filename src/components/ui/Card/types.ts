import React from "react";

export type CardVariant = "default" | "elevated";

export interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
}