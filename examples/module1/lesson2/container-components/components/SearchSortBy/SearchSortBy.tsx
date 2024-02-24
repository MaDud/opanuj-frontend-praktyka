import { useMemo } from 'react';
import { Label } from '../Label/Label';
import type { SearchSortByProps } from './SearchSortBy.types';
import { Select } from '../Select/Select';

export const SearchSortBy = ({
  sortOption,
  setSortOption,
}: SearchSortByProps) => {
  const sortOptions = useMemo(
    () => [
      { value: '', text: 'Initial' },
      { value: 'name', text: 'Name' },
      { value: 'created', text: 'Created Date' },
    ],
    []
  );

  return (
    <Label label="Sort By">
      <Select
        options={sortOptions}
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      />
    </Label>
  );
};
