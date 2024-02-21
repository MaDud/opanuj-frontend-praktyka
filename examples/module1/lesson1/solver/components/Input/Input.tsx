import { InputProps } from './Input.types';

export const Input = ({ value, onChange, type }: InputProps) => {
  return (
    <input
      type={type}
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChange}
    />
  );
};
