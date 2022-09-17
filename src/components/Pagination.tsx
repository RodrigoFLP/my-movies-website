import { FC } from "react";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";
import IconButton from "./Buttons/IconButton";

import styles from "../styles/Pagination.module.css";

interface PaginationProps {
  onNext: () => void;
  onPrevious: () => void;
  total: number;
  currentPage: string | null;
}

export const Pagination: FC<PaginationProps> = ({
  onNext,
  onPrevious,
  total,
  currentPage,
}) => {
  const isPreviousDisabled = !currentPage || +currentPage === 1;
  const isNextDisabled = currentPage
    ? +currentPage === total
    : total === 1
    ? true
    : false;

  return (
    <div className={styles.pagination}>
      <IconButton onClick={onPrevious} disabled={isPreviousDisabled}>
        <ArrowLeft />
      </IconButton>
      <IconButton onClick={onNext} disabled={isNextDisabled}>
        <ArrowRight />
      </IconButton>
    </div>
  );
};
