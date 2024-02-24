import type { SearchGenderProps } from '../SearchGender/SearchGender.types';
import type { SearchNameProps } from '../SearchName/SearchName.types';
import type { SearchSortByProps } from '../SearchSortBy/SearchSortBy.types';

export type SearchFormProps = SearchNameProps &
  SearchGenderProps &
  SearchSortByProps;
