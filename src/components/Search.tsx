import styles from "../styles/Search.module.css";
import IconButton from "./Buttons/IconButton";

import { Search as SearchIcon } from "tabler-icons-react";
import { FormEvent, useState } from "react";

const Search = () => {
  const [showFixedSearch, setShowFixedSearch] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (showFixedSearch) {
      setShowFixedSearch(false);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`${styles.container}  ${
          showFixedSearch && styles["container-visible"]
        }`}
      >
        <input className={styles.input} placeholder="Search..." />
        <IconButton>
          <SearchIcon size={14} />
        </IconButton>
      </form>
      <div className={styles["search-action"]}>
        <IconButton onClick={() => setShowFixedSearch(true)}>
          <SearchIcon size={14} />
        </IconButton>
      </div>
    </>
  );
};

export default Search;
