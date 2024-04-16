import type { Dispatch, SetStateAction } from "react";

export type SearchNameProps = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};
