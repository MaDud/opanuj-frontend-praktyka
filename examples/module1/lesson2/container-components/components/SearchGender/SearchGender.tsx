import { useMemo } from 'react';
import { Label } from '../Label/Label';
import type { SearchGenderProps } from './SearchGender.types';
import { Select } from '../Select/Select';
import { AVAILABLE_GENDERS } from './SearchGender.constants';

export const SearchGender = ({ gender, setGender }: SearchGenderProps) => {
  const genderOptions = useMemo(
    () => (
      <Select
        options={AVAILABLE_GENDERS}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
    ),
    [gender, setGender]
  );

  return <Label label="Gender">{genderOptions}</Label>;
};
