import type { ChangeEventHandler } from 'react';

type Option = {
  value: string;
  text: string;
};

export type SelectProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
};
