import { useMemo } from 'react';
import { add, divide, multiply, substract } from '../../helpers/functions';
import { ButtonsContainerData } from './ButtonsContainer.types';
import { Button } from '../../components/Button/Button';
import { useSolverContext } from '../../context/useSolverContext';

export const ButtonsContainer = () => {
  const { calc, error } = useSolverContext();

  const data: ButtonsContainerData = useMemo(
    () => [
      { text: '+', method: add },
      { text: '-', method: substract },
      { text: '*', method: multiply },
      { text: '/', method: divide },
    ],
    []
  );

  if (error) return;

  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {data.map(({ text, method }) => (
        <Button onClick={() => calc(method)} key={String(text)}>
          {text}
        </Button>
      ))}
    </div>
  );
};
