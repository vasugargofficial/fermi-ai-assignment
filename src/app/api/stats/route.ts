import { NextResponse } from "next/server";
import { delay } from "@/lib/utils";
import { ApiResponse } from "@/types/api";
import { StatItem } from "@/types/models";

export async function GET() {
  await delay();

  const data: StatItem[] = [
    { id: "1", label: "Revenue", value: "$120,000", change: 12, icon: "💰" },
    { id: "2", label: "Users", value: "5,400", change: -3, icon: "👥" },
    { id: "3", label: "Orders", value: "320", change: 8, icon: "📦" },
    { id: "4", label: "Conversion", value: "2.4%", change: 1.2, icon: "📈" },
  ];

  const response: ApiResponse<StatItem[]> = { data };

  return NextResponse.json(response);
}