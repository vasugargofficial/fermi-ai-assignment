import { Suspense } from "react";
import { StatsSection } from "./components/Stats/StatsSection";
import { UsersTable } from "./components/Users/UserTable.server";
import { UserQueryParams } from "@/lib/api";


export default async function DashboardPage({
  searchParams,
}: {
  searchParams: UserQueryParams;
}) {
  const resolvedParams = await searchParams;
  return (
    <div>
      <Suspense fallback={<div>Loading stats...</div>}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<div>Loading table...</div>}>
        <UsersTable searchParams={resolvedParams} />
      </Suspense>
    </div>
  );
}