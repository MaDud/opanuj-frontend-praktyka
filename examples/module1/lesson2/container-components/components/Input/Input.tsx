import { InputProps } from "./Input.types";

export const Input = ({value, onChange}: InputProps) => {
    return (
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={value}
        onChange={onChange}
      />
    );
  };