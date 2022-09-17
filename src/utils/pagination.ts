import { SearchResult } from "../interfaces/search";

export const getPaginationRange = (movies: SearchResult) => {
  let start = 0;
  let end = 0;

  if (movies.total_pages === movies.page) {
    start = movies.total_results - movies.results.length + 1;
    end = movies.total_results;
    return { start, end };
  }
  start = (movies.page - 1) * movies.results.length + 1;
  end = movies.results.length * movies.page;

  return { start, end };
};
