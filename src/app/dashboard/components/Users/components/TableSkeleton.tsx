import styles from "../UserTable.module.css";
import { TableColumn } from "../types";

type Props<T> = {
  columns: TableColumn[];
  rows?: number;
};

export const TableSkeleton = <T,>({
  columns,
  rows = 8,
}: Props<T>) => {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i} className={styles.tr}>
          {columns.map((col, index) => (
            <td
              key={String(col.key)}
              className={`${styles.td} ${
                index === 0 ? styles.sticky : ""
              }`}
            >
              <div className={styles.skeleton} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};