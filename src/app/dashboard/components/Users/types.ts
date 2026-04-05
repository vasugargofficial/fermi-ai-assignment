export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableRow {
  id: string;
  [key: string]: string | number;
}

export interface DataTableProps {
  data: TableRow[];
  columns: TableColumn[];
  meta?: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
  page: number;
  sort: string;
  order: "asc" | "desc";
  search: string;
};