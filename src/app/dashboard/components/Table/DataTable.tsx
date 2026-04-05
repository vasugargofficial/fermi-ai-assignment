"use client";

import styles from "./DataTable.module.css";
import { TableColumn, TableRow } from "./types";
import { Button } from "@/components/ui/Button/Button";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import { debounce } from "@/lib/utils";

type Props = {
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

export const DataTable: React.FC<Props> = ({
  data,
  columns,
  meta,
  page,
  sort,
  order,
  search,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

const updateQuery = (updates: Record<string, string | number>) => {
  const params = new URLSearchParams(searchParams.toString());

  Object.entries(updates).forEach(([key, value]) => {
    if (value === "" || value === undefined) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
  });

  router.push(`${pathname}?${params.toString()}`);
};

  useEffect(() => {
    debounce(() => 
      updateQuery({ search: searchInput, page: 1 })
    , 300)();
  }, [searchInput]);

  const handleSort = (column: string) => {
    if (!column) return;

    const newOrder =
      sort === column && order === "asc" ? "desc" : "asc";

    updateQuery({
      sort: column,
      order: newOrder,
      page: 1,
    });
  };

  const handlePageChange = (newPage: number) => {
    updateQuery({ page: newPage });
  };

  return (
    <div className={styles.wrapper}>
      <div style={{ marginBottom: "12px" }}>
        <Input
          label="Search user"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={`${styles.th} ${
                    index === 0 ? styles.sticky : ""
                  }`}
                >
                  <div className={styles.headerCell}>
                    <span>{col.label}</span>

                    {col.sortable && (
                      <span className={styles.sortIcons}>
                        {sort === col.key
                          ? order === "asc"
                            ? "↑"
                            : "↓"
                          : "↑↓"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>No results found</td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id} className={styles.tr}>
                  {columns.map((col, index) => (
                    <td
                      key={col.key}
                      className={`${styles.td} ${
                        index === 0 ? styles.sticky : ""
                      }`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <Button
          size="sm"
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </Button>

        <div className={styles.pages}>
          <span>
            {page} / {meta?.totalPages ?? 1}
          </span>
        </div>

        <Button
          size="sm"
          disabled={page >= (meta?.totalPages ?? 1)}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};