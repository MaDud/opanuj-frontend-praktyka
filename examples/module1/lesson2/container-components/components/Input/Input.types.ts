import type { ChangeEvent } from 'react';

export type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
