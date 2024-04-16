import { useState } from 'react';
import { CharacterList } from '../components/CharacterList/CharacterList';
import SearchForm from '../components/SearchForm/SearchForm';
import { SearchTitle } from '../components/SearchTitle/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { sortCharacters } from '../helpers/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const {
    characters
  } = useCharacterSearch(name, gender);

  const sortedCharacters = sortCharacters(characters, sortOption)

  return (
    <>
      <div className="pt-20" />
      <SearchTitle name={'Ricky Morty'} />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
