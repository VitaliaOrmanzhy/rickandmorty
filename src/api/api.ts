import axios from "axios";
import { ListType, ProfileType } from "../types/types";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const fetchCharacters = (page: number): Promise<ListType> => {
  return instance.get(`/character?page=${page}`);
};

export const fetchSingleCharacter = (id: string | undefined): Promise<ProfileType> => {
  return instance.get(`/character/${id}`);
};

export const filterByName = (value: string, page: number): Promise<ListType> => {
  if (value !== "")
    return instance.get(`/character?page=${page}&name=${value}`);

  return Promise.reject("No value provided");
};
