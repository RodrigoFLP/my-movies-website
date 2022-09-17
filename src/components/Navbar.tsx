import styles from "../styles/Navbar.module.css";
import IconButton from "./Buttons/IconButton";

import { Logout, Heart, Menu } from "tabler-icons-react";
import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { clearToken } from "../store/slices/authSlice";

interface NavbarProps {
  centerContent: ReactElement;
}

export const Navbar: FC<NavbarProps> = ({ centerContent }) => {
  const dispatch = useAppDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleFavoritesClick = () => {
    navigate("/favorites");
    setShowMenu(false);
  };

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["logo-container"]} onClick={() => navigate("/")}>
          <img src="/logo.svg" />
        </div>
        {centerContent}
        <ul className={`${styles.ul} ${showMenu && styles["ul-visible"]}`}>
          <li data-testid="favorites" onClick={handleFavoritesClick}>
            <IconButton>
              <Heart size={16} />
            </IconButton>
            <span>Favorites</span>
          </li>
          <li data-testid="logout" onClick={handleLogout}>
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
