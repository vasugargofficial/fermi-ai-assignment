import styles from "../UserTable.module.css";

type Props = {
  colSpan: number;
  message?: string;
};

export const TableEmpty = ({
  colSpan,
  message = "No results found",
}: Props) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colSpan} className={styles.empty}>
          {message}
        </td>
      </tr>
    </tbody>
  );
};