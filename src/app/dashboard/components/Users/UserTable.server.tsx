import { fetchUsers, UserQueryParams } from "@/lib/api";
import { DataTableClient } from "./UserTable.client";
import { TableColumn, TableRow } from "./types";
import { User } from "@/types/models";

export async function UsersTable({
  searchParams,
}: {
  searchParams: UserQueryParams;
}) {
  const page = Number(searchParams.page ?? 1);
  const sort = searchParams.sort ?? "role";
  const order = searchParams.order ?? "asc";
  const search = searchParams.search ?? "";

  const res = await fetchUsers({ page, sort, order, search });

  const rows: TableRow[] = res.data.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  }));

  const columns: TableColumn[] = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email" },
    { key: "role", label: "Role", sortable: true },
    { key: "status", label: "Status" },
  ];

  return (
    <DataTableClient
      data={rows}
      columns={columns}
      meta={res.meta}
      page={page}
      sort={sort}
      order={order}
      search={search}
    />
  );
}