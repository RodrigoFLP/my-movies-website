import styles from "../styles/Navbar.module.css";
import IconButton from "./Buttons/IconButton";
import Search from "./Search";

import { Logout, Heart } from "tabler-icons-react";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src="/logo.svg" />
      <Search />
      <ul className={styles.ul}>
        <li data-testid="favorites">
          <IconButton>
            <Heart size={16} />
          </IconButton>
        </li>
        <li data-testid="logout">
          <IconButton>
            <Logout size={16} />
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
