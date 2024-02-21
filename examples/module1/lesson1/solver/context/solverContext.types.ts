export type SolverData = {
  calc: (method: (a: number, b: number) => number) => void;
  firstNum: number;
  setFirstNumValue: (value: string) => void;
  secondNum: number;
  setSecondNumValue: (value: string) => void;
  result: number | string;
  error: Error | null;
};
