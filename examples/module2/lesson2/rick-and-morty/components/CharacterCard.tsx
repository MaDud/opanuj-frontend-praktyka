import { Character } from '../api';

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
};
