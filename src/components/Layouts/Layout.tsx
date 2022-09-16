import Navbar from "../Navbar";
import styles from "../../styles/Layout.module.css";
import { FC, ReactElement, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={styles["layout-container"]}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
