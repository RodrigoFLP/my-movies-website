import styles from "../../styles/Search.module.css";
import IconButton from "../Buttons/IconButton";

import { Search as SearchIcon } from "tabler-icons-react";
import { FormEvent, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [showFixedSearch, setShowFixedSearch] = useState(false);

  const navigate = useNavigate();

  const elementRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (showFixedSearch) {
      setShowFixedSearch(false);
    }
    if (elementRef.current && elementRef.current.value.length > 0) {
      const queryString = new URLSearchParams({
        query: elementRef.current.value,
      }).toString();

      navigate(`/search?${queryString}`);
    }
  };

  //Focus input when fixed search is showed
  useEffect(() => {
    if (elementRef.current && showFixedSearch) {
      elementRef.current.focus();
    }
  }, [showFixedSearch]);

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`${styles.container}  ${
          showFixedSearch && styles["container-visible"]
        }`}
      >
        <input
          ref={elementRef}
          className={styles.input}
          placeholder="Search..."
        />
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
