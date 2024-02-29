import {
  type ReactNode,
  createContext,
  useState,
  useCallback,
} from 'react';
import { SolverData, ValidateDataProps } from './solverContext.types';

export const SolverContext = createContext<SolverData | null>(null);

export const SolverProvider = ({ children }: { children: ReactNode }) => {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<Error | null>(null);

  const validateData = useCallback(
    ({ value, errorMessage }: ValidateDataProps) => {
      if (Number.isNaN(value)) {
        setError(Error(errorMessage));
        return;
      }

      setError(null);
    },
    [firstNum, secondNum]
  );

  const setFirstNumValue = (value: string) => {
    const parsedValue = parseFloat(value);

    validateData({
      value: parsedValue,
      errorMessage: 'Expected number in the first input field',
    });

    setFirstNum(parsedValue);
  };

  const setSecondNumValue = (value: string) => {
    const parsedValue = parseFloat(value);

    validateData({
      value: parsedValue,
      errorMessage: 'Expected number in the second input field',
    });

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
