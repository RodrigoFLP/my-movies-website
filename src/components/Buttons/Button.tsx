import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "../../styles/Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: "sm" | "md";
}

export const Button: FC<ButtonProps> = ({ children, size = "md", onClick }) => {
  return (
    <button className={`${styles.button} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};
