import { SearchFormProps } from './SearchForm.types';
import { SearchGender } from '../SearchGender/SearchGender';
import { SearchName } from '../SearchName/SearchName';
import { SearchSortBy } from '../SearchSortBy/SearchSortBy';


function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchName name={name} setName={setName} />
      <SearchGender gender={gender} setGender={setGender} />
      <SearchSortBy sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
