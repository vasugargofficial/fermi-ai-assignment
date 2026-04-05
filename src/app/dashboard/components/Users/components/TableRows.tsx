import { TableColumn } from "../types";
import styles from "../UserTable.module.css";

type Props<T> = {
  data: T[];
  columns: TableColumn[];
};

export const TableRows = <T extends Record<string, any> & { id: string | number }>({
  data,
  columns,
}: Props<T>) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className={styles.tr}>
          {columns.map((col, index) => (
            <td
              key={String(col.key)}
              className={`${styles.td} ${
                index === 0 ? styles.sticky : ""
              }`}
            >
              {String(row[col.key] ?? "")}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};