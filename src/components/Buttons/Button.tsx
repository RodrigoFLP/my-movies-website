import { FC, ReactNode } from "react";
import styles from "../../styles/Button.module.css";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md";
}

export const Button: FC<ButtonProps> = ({ children, size = "md" }) => {
  return (
    <button className={`${styles.button} ${styles[size]}`}>{children}</button>
  );
};
