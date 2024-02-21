import type { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode | string;
  onClick: (e?: MouseEvent) => void;
};
