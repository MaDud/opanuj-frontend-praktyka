import type { Dispatch, SetStateAction } from "react";

export type SearchSortByProps = {
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
};
