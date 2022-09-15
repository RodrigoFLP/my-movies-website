import styles from "../styles/Navbar.module.css";
import IconButton from "./Buttons/IconButton";
import Search from "./Search";

import { Logout, Heart, Menu } from "tabler-icons-react";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <img src="/logo.svg" />
        <Search />
        <ul className={`${styles.ul} ${showMenu && styles["ul-visible"]}`}>
          <li data-testid="favorites">
            <IconButton>
              <Heart size={16} />
            </IconButton>
            <span>Favorites</span>
          </li>
          <li data-testid="logout">
            <IconButton>
              <Logout size={16} />
            </IconButton>
            <span>Logout</span>
          </li>
        </ul>
        <li className={styles.hamburger}>
          <IconButton onClick={() => setShowMenu(true)}>
            <Menu size={16} />
          </IconButton>
        </li>
      </nav>
      {showMenu && (
        <div
          className={styles.overlay}
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
