import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { SearchNameProps } from './SearchName.types';

export const SearchName = ({ name, setName }: SearchNameProps) => {
  return (
    <Label label="Name">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Rick Sanchez..."
      />
    </Label>
  );
};
