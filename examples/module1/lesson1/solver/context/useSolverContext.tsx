import { useContext } from 'react';
import { SolverContext } from './solverContext';

export const useSolverContext = () => {
  const context = useContext(SolverContext);

  if (!context) {
    throw new Error(
      'useSolverContext hook parent should be wrapped by SolverContextProvider'
    );
  }

  return context;
};
