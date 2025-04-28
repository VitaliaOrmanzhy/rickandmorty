import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const fetchCharacters = (page) => {
  return instance.get(`/character?page=${page}`);
};

export const fetchSingleCharacter = (id) => {
  return instance.get(`/character/${id}`);
};

export const filterByName = (value, page) => {
  if (value !== "")
    return instance.get(`/character?page=${page}&name=${value}`);
};
