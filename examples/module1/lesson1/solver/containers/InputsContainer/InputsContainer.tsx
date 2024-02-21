import { Input } from '../../components/Input/Input';
import { useSolverContext } from '../../context/useSolverContext';
import { InputsContainerData } from './InputsContainer.types';

export const InputsContainer = () => {
  const { firstNum, setFirstNumValue, secondNum, setSecondNumValue, error } =
    useSolverContext();

  const data: InputsContainerData = [
    { value: firstNum, onChange: setFirstNumValue },
    { value: secondNum, onChange: setSecondNumValue },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4">
        {data.map(({ value, onChange }, index) => (
          <Input
            value={value}
            onChange={({ target }) => onChange(target.value)}
            key={`calc-${index}`}
            type="number"
          />
        ))}
      </div>
      {error && <p className="mt-4">{String(error)}</p>}
    </>
  );
};
