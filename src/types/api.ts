export type ApiResponse<T> = {
  data: T;
  meta?: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
  error?: string;
};

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  params?: Record<string, string | number | undefined>;
  headers?: HeadersInit;
  cache?: RequestCache;
};