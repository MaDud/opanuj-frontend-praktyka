import { CharacterElementProps } from './CharacterElement.types';

export const CharacterElement = ({ character }: CharacterElementProps) => {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
};
