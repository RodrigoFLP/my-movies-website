import styles from "../styles/Search.module.css";
import IconButton from "./Buttons/IconButton";

import { Search as SearchIcon } from "tabler-icons-react";

const Search = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Search..." />
      <IconButton>
        <SearchIcon size={14} />
      </IconButton>
    </div>
  );
};

export default Search;
