import axios from "axios";
import { ListType, ProfileType } from "../types/types";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const fetchSingleCharacter = (id: string | undefined): Promise<ProfileType> => {
  return instance.get(`/character/${id}`);
};

export const fetchCharacters = (value: string, page: number): Promise<ListType> => {
    return instance.get(`/character?page=${page}&name=${value}`);
};
