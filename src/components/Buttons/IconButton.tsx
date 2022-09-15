import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "../../styles/IconButton.module.css";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
