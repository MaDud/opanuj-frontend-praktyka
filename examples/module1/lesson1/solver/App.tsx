import { ButtonsContainer } from './containers/ButtonsContainer/ButtonsContainer';
import { InputsContainer } from './containers/InputsContainer/InputsContainer';
import { ResultContainer } from './containers/ResultContainer/ResultContainer';
import { SolverProvider } from './context/solverContext';

const App = () => {
  return (
    <div>
      <SolverProvider>
        <InputsContainer />
        <ButtonsContainer />
        <ResultContainer />
      </SolverProvider>
    </div>
  );
};

export default App;
