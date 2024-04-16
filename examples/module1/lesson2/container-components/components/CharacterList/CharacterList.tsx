import { CharacterElement } from '../CharacterElement/CharacterElement';
import type { CharacterListProps } from './CharacterList.types';

export const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <li key={character.id} className="flex flex-col items-center">
          <CharacterElement character={character} />
        </li>
      ))}
    </ol>
  );
};
