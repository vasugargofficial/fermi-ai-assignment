import { ApiResponse, RequestOptions, HttpMethod } from "@/types/api";

const apiHost = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
const baseUrl = `${apiHost.replace(/\/$/, "")}/api`;

function buildUrl(url: string, params?: RequestOptions["params"]) {
  if (!params) return `${baseUrl}/${url}`;

  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      search.append(key, String(value));
    }
  });
  return `${baseUrl}/${url}?${search.toString()}`;
}

export async function apiClient<TResponse>(
  url: string,
  options: RequestOptions = {}
): Promise<ApiResponse<TResponse>> {
  const {
    method = "GET",
    body,
    params,
    headers,
    cache = "no-store",
  } = options;

  const res = await fetch(buildUrl(url, params), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache,
  });

  const json: ApiResponse<TResponse> = await res.json();

  if (!res.ok || json.error) {
    throw new Error(json.error || "API request failed");
  }

  return json;
}