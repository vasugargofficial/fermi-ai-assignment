import { Button } from "@/components/ui/Button/Button";
import styles from "../UserTable.module.css";

export const PaginationBar: React.FC<{ page: number; totalPages: number; onChange: (page: number) => void }> = ({ page, totalPages, onChange }) => (
  <div className={styles.pagination}>
    <Button size="sm" disabled={page <= 1} onClick={() => onChange(page - 1)}>
      Prev
    </Button>

    <span>{page} / {totalPages}</span>

    <Button size="sm" disabled={page >= totalPages} onClick={() => onChange(page + 1)}>
      Next
    </Button>
  </div>
);