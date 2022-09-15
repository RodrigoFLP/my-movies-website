import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "../../styles/IconButton.module.css";

interface IconButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
