import type { SearchTitleProps } from './SearchTitle.types';

export const SearchTitle = ({ name }: SearchTitleProps) => {
  return <h1 className="text-2xl">Wyszukiwarka postaci {name}</h1>;
};
