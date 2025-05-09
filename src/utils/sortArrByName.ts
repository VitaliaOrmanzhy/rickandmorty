import { CharacterType } from "../types/types";

export const sortArrByName = (arr: Array<CharacterType>) =>
  arr.sort((a, b) => a.name.localeCompare(b.name));
