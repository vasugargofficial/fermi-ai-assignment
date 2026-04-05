import { apiClient } from "@/lib/apiClient";
import { StatItem, User } from "@/types/models";

export interface UserQueryParams {
  page?: number;
  sort?: string;       
  order?: "asc" | "desc";
  search?: string;
};

export function fetchStats() {
  return apiClient<StatItem[]>("stats");
}

export function fetchUsers(params: UserQueryParams) {
  return apiClient<User[]>("users", {
    params,
    headers: {
      cache: "no-store"
    }
  });
}