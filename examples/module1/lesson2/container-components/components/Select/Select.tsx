import { SelectProps } from "./Select.types";

export const Select = ({value, onChange, options}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border h-7 mt-1"
    >
        {options.map(({value, text}) =>  <option value={value}>{text}</option>)}
    </select>
  );
};
