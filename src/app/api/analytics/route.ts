import { NextResponse } from "next/server";
import { delay } from "@/lib/utils";
import { ApiResponse } from "@/types/api";
import { Analytics } from "@/types/models";



export async function GET() {
  await delay();

  const data: Analytics[] = Array.from({ length: 30 }).map((_, i) => ({
    date: `2024-03-${String(i + 1).padStart(2, "0")}`,
    value: Math.floor(Math.random() * 1000),
  }));

  const response: ApiResponse<Analytics[]> = { data };

  return NextResponse.json(response);
}