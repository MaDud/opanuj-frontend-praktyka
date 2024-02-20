import type { CompareProps } from './types';

export const isInteger = (value: number) => {
  return Number.isInteger(value);
};

export const isSmaller = ({ value, compareValue }: CompareProps) => {
  return value < compareValue;
};

export const isHigher = ({ value, compareValue }: CompareProps) => {
  return value > compareValue;
};

export const isEven = (value: number) => {
  return value % 2 === 0;
};
