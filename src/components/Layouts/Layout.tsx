import Navbar from "../Navbar";
import styles from "../../styles/Layout.module.css";
import { FC, ReactElement, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  centerElement: ReactElement;
}

export const Layout: FC<LayoutProps> = ({ children, centerElement }) => {
  return (
    <div className={styles["layout-container"]}>
      <Navbar>{centerElement}</Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
