import { fetchStats } from "@/lib/api";
import { StatsCards } from "./StatsCards";

export async function StatsSection() {
  const stats = await fetchStats();

  return <StatsCards stats={stats.data} />;
}