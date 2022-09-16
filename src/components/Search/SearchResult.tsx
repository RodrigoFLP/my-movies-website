import { FC } from "react";

interface SearchResultProps {
  query: string;
}

export const SearchResult: FC<SearchResultProps> = ({ query }) => {
  return (
    <>
      <h2>Results for &quot;{query}&quot;</h2>
    </>
  );
};

export default SearchResult;
