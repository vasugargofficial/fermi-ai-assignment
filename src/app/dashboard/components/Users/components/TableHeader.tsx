import React from "react";
import { TableColumn } from "../types";
import styles from "../UserTable.module.css";

export const TableHeader: React.FC<{ columns: TableColumn[]; sort: string; order: "asc" | "desc"; onSort: Function }> = ({ columns, sort, order, onSort }) => (
  <thead>
    <tr>
      {columns.map((col, index) => (
        <th className={`${styles.th} ${index === 0 ? styles.sticky : ""
          }`}
          key={col.key} onClick={() => col.sortable && onSort(col.key)}>
          <div className={styles.headerCell}>
            {col.label}
            {col.sortable && (sort === col.key ? (order === "asc" ? "↑" : "↓") : "↑↓")}
          </div>

        </th>
      ))}
    </tr>
  </thead>
);