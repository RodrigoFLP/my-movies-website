import Navbar from "../Navbar";
import styles from "../../styles/Layout.module.css";
import {
  Outlet,
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Search from "../Search/Search";
import SearchResult from "../Search/SearchResult";
import { useEffect, useState } from "react";

export const Layout = () => {
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get("query");

  // const [searchQuery, setSearchQuery] = useState(query || "");

  // const navigate = useNavigate();

  // useEffect(() => {
  //   // alert(searchQuery);

  //   if (searchQuery) {
  //     navigate(`?query=${searchQuery}`);
  //   }
  //   if (!searchQuery) {
  //     navigate("");
  //   }
  // }, [searchQuery]);

  return (
    <div className={styles["layout-container"]}>
      <Navbar centerContent={<Search />} />
      <Outlet />
    </div>
  );
};

export default Layout;
