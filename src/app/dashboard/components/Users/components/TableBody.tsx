import { TableRows } from "./TableRows";
import { TableSkeleton } from "./TableSkeleton";
import { TableEmpty } from "./TableEmpty";
import React from "react";
import { TableColumn, TableRow } from "../types";

export const TableBody: React.FC<{ data: TableRow[]; columns: TableColumn[]; isLoading: boolean }> = ({ data, columns, isLoading }) => {
  if (isLoading) return <TableSkeleton columns={columns} />;
  if (!data.length) return <TableEmpty colSpan={columns.length} />;

  return <TableRows data={data} columns={columns} />;
};