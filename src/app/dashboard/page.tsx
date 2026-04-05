import { StatsContainer } from "./components/StatsContainer";
import { DataTable } from "./components/Table/DataTable";

export default function DashboardPage() {
  return (
    <div>
      <StatsContainer />
      <DataTable />
    </div>
  );
}