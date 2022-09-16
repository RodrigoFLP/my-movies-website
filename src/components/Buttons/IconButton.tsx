import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "../../styles/IconButton.module.css";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${className}  ${
        disabled && styles.disabled
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
