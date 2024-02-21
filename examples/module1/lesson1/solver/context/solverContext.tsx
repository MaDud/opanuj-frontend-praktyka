import { type ReactNode, createContext, useState, useEffect } from 'react';
import { SolverData } from './solverContext.types';

export const SolverContext = createContext<SolverData | null>(null);

export const SolverProvider = ({ children }: { children: ReactNode }) => {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if ([firstNum, secondNum].some((value) => Number.isNaN(value))) {
      setError(Error('Value need to be a number'));
      return;
    }

    setError(null);
  }, [firstNum, secondNum]);

  const setFirstNumValue = (value: string) => {
    const parsedValue = parseFloat(value);

    setFirstNum(parsedValue);
  };

  const setSecondNumValue = (value: string) => {
    const parsedValue = parseFloat(value);

    setSecondNum(parsedValue);
  };

  const calc = (method: (a: number, b: number) => number) => {
    const result = method(firstNum, secondNum);

    setResult(result);
  };

  return (
    <SolverContext.Provider
      value={{
        calc,
        firstNum,
        setFirstNumValue,
        secondNum,
        setSecondNumValue,
        result,
        error,
      }}
    >
      {children}
    </SolverContext.Provider>
  );
};
