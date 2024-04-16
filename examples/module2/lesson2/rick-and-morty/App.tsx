import { CharacterList } from './components/CharacterList';
import { useCharacterList } from './hooks/useCharacterList';

function App() {
  const { characters } = useCharacterList();

  return (
    <div>
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
