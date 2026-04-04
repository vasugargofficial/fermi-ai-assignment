import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCount?: boolean;
  prepend?: React.ReactNode;
  append?: React.ReactNode
}