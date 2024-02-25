import { useCallback, useMemo } from 'react';
import { Label } from '../Label/Label';
import type { SearchSortByProps } from './SearchSortBy.types';
import { Select } from '../Select/Select';
import { SORT_BY_OPTIONS } from './SearchSortBy.constants';

export const SearchSortBy = ({
  sortOption,
  setSortOption,
}: SearchSortByProps) => {
  const sortOptions = useMemo(
    () => (
      <Select
        options={SORT_BY_OPTIONS}
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      />
    ),
    [sortOption, setSortOption]
  );

  return <Label label="Sort By">{sortOptions}</Label>;
};
