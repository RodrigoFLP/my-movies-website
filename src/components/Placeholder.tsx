import styles from "../styles/Placeholder.module.css";
import { FC, ReactNode } from "react";

interface PlaceholderProps {
  children: ReactNode;
}

export const Placeholder: FC<PlaceholderProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Placeholder;
