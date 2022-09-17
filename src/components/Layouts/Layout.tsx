import Navbar from "../Navbar";
import styles from "../../styles/Layout.module.css";
import { Outlet } from "react-router-dom";
import Search from "../Search/Search";

export const Layout = () => {
  return (
    <div className={styles["layout-container"]}>
      <Navbar centerContent={<Search />} />
      <Outlet />
    </div>
  );
};

export default Layout;
