import { useSolverContext } from '../../context/useSolverContext';

export const ResultContainer = () => {
  const { result, error } = useSolverContext();

  if (error) return;

  return <div>Result: {result}</div>;
};
