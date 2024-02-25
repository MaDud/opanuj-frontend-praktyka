import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode | string;
  onClick: (e: MouseEventHandler) => void;
};
