"use client";

import React, { useState, useEffect } from "react";
import { useQueryParams } from "./hooks/useQueryParams";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import { DataTableProps } from "./types";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { PaginationBar } from "./components/PaginationBar";
import { SearchBar } from "./components/SearchBar";
import { useTransition } from "react";

import styles from "./UserTable.module.css";

export const DataTableClient: React.FC<DataTableProps> = ({
  data,
  columns,
  meta,
  page,
  sort,
  order,
  search,
}) => {
  const { updateQuery } = useQueryParams();
  const [isPending, startTransition] = useTransition()

  const [searchInput, setSearchInput] = useState(search);
  const [localSort, setLocalSort] = useState({ sort, order });

  const debouncedSearch = useDebouncedValue(searchInput);

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  useEffect(() => {
    startTransition(() => {
      updateQuery({ search: debouncedSearch, page: 1 });
    });
  }, [debouncedSearch]);

  const handleSort = (column: string) => {
    const newOrder =
      localSort.sort === column && localSort.order === "asc"
        ? "desc"
        : "asc";

    setLocalSort({ sort: column, order: newOrder });

    startTransition(() => {
      updateQuery({ sort: column, order: newOrder, page: 1 });
    });
  };

  return (
    <div className={styles.wrapper}>
      <SearchBar value={searchInput} onChange={setSearchInput} />

      <div className={styles.scroll}>
        <table className={styles.table}>
          <TableHeader
            columns={columns}
            sort={localSort.sort}
            order={localSort.order}
            onSort={handleSort}
          />
          <TableBody isLoading={isPending} data={data} columns={columns} />
        </table>
      </div>

      <PaginationBar
        page={page}
        totalPages={meta?.totalPages ?? 1}
        onChange={(p) => updateQuery({ page: p })}
      />
    </div>
  );
};