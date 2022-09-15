import { FC, ReactNode } from "react";

import styles from "../../styles/IconButton.module.css";

interface IconButtonProps {
  children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default IconButton;
