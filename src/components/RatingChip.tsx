import { Star } from "tabler-icons-react";
import styles from "../styles/RatingChip.module.css";

export const RatingChip = ({
  vote_average,
  size = "sm",
}: {
  vote_average: number;
  size?: "sm" | "md";
}) => {
  const baseRating = "10";
  return (
    <div className={`${styles.rating} ${styles[size]}`}>
      <Star size={10} fill={"black"} />
      {vote_average.toFixed(2)}/ {baseRating}
    </div>
  );
};

export default RatingChip;
