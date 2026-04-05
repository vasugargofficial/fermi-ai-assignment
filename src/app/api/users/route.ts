import { NextRequest, NextResponse } from "next/server";
import { delay } from "@/lib/utils";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/models";



const USERS: User[] = Array.from({ length: 100 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ["Admin", "Editor", "Viewer"][i % 3],
  status: i % 2 === 0 ? "active" : "inactive",
}));

export async function GET(req: NextRequest) {
  await delay();

  const { searchParams } = req.nextUrl;

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const sort = searchParams.get("sort") || "name";
  const order = searchParams.get("order") || "asc";
  const search = searchParams.get("search")?.toLowerCase() || "";

  let filtered = USERS;

  // search
  if (search) {
    filtered = filtered.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
    );
  }

  // sort
  filtered = filtered.sort((a, b) => {
    const aVal = a[sort as keyof User];
    const bVal = b[sort as keyof User];

    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  // pagination
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const start = (page - 1) * limit;

  const paginated = filtered.slice(start, start + limit);

  const response: ApiResponse<User[]> = {
    data: paginated,
    meta: {
      page,
      totalPages,
      totalItems,
    },
  };

  return NextResponse.json(response);
}