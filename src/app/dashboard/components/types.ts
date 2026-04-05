export interface StatItem {
  id: string;
  label: string;
  value: string;
  change: number; // percentage
  icon: React.ReactNode;
}