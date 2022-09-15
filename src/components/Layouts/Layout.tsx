import Navbar from "../Navbar";
import styles from "../../styles/Layout.module.css";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles["layout-container"]}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
