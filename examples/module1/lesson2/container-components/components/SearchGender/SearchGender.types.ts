import type { Dispatch, SetStateAction } from "react";

export type SearchGenderProps = {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
};
