export interface StatItem {
  id: string;
  label: string;
  value: string;
  change: number; // percentage
  icon: React.ReactNode;
}

export interface Analytics {
  date: string;
  value: number;
};

export type UserStatus = "active" | "inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: UserStatus;
};