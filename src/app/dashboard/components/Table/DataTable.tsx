import styles from "./DataTable.module.css";
import { TableColumn, TableRow } from "./types";
import { Button } from "@/components/ui/Button/Button";

const columns: TableColumn[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
  { key: "createdAt", label: "Created At" },
];

const data: TableRow[] = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i),
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  role: "User",
  status: i % 2 === 0 ? "Active" : "Inactive",
  createdAt: "2024-01-01",
}));

export const DataTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={col.key}
                  className={`${styles.th} ${
                    index === 0 ? styles.sticky : ""
                  }`}
                >
                  <div className={styles.headerCell}>
                    <span>{col.label}</span>
                    {col.sortable && (
                      <span className={styles.sortIcons}>↑↓</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (UI only) */}
      <div className={styles.pagination}>
        <Button size="sm">Previous</Button>

        <div className={styles.pages}>
          <Button variant="ghost">1</Button>
          <Button variant="ghost">2</Button>
          <Button variant="ghost">3</Button>
        </div>

        <Button size="sm">Next</Button>
      </div>
    </div>
  );
};