import { useMemo } from 'react';
import { Label } from '../Label/Label';
import type { SearchGenderProps } from './SearchGender.types';
import { Select } from '../Select/Select';

export const SearchGender = ({ gender, setGender }: SearchGenderProps) => {
  const genderOptions = useMemo(
    () => [
      { value: '', text: 'Any Gender' },
      { value: 'female', text: 'Female' },
      { value: 'male', text: 'Male' },
      { value: 'genderless', text: 'Genderless' },
      { value: 'unknown', text: 'Unknown' },
    ],
    []
  );

  return (
    <Label label="Gender">
      <Select
        options={genderOptions}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
    </Label>
  );
};
