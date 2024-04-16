import { useEffect, useState } from 'react';
import { Character, DefaultApi } from '../api';

const api = new DefaultApi();

export const useCharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api
      .getCharacters()
      .then((data) => setCharacters(data.results || []))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return { characters };
};
