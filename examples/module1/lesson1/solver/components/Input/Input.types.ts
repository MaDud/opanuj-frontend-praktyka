import type { ChangeEvent } from 'react';

export type InputProps = {
  value: string | number;
  type: 'number' | 'text';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
