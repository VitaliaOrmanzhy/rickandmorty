import React, { useEffect } from "react";
import { CardsList } from "./CardsList/CardsList";
import { fetchCharacters } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { Search } from "./Search/Search";
import { sortArrByName } from "../../utils/sortArrByName";
import { Logo } from "./Logo/Logo";
import { useSearchParams } from "react-router";
import { useGetPage } from "../../hooks/useGetPage";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "./Card/CardSkeleton";
import { useGetFiltered } from "../../hooks/useGetFiltered";
import { CharacterType, ListType } from "../../types/types";
import logo from "../../img/PngItem_438051 1.png";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setPage] = useGetPage();
  const [inputText, setInputText] = useGetFiltered();
  const [debouncedValue] = useDebounce(inputText, 500);

  useEffect(() => {
    setSearchParams({ page: currPage.toString() });
  }, [currPage]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!debouncedValue) {
      params.delete("filtered");
      params.set("page", currPage.toString());
    } else {
      params.set("filtered", debouncedValue);
      params.set("page", currPage.toString());
    }

    setSearchParams(params);
  }, [debouncedValue, currPage]);

  const {
    data: list,
    isLoading: listIsLoading,
    error: listError,
  } = useQuery<ListType>({
    queryFn: () => fetchCharacters(debouncedValue, currPage),
    queryKey: ["characters", debouncedValue, currPage],
  });

  useEffect(() => {
    if (list) setPage((prev) => (list?.data.info.pages < prev ? 1 : prev));
  }, [list]);

  const sorted: Array<CharacterType> = list
    ? sortArrByName([...list.data.results])
    : [];

  return (
    <>
      <Logo src={logo} />
      <Search
        inputText={inputText}
        setInputText={setInputText}
        setPage={setPage}
      />
      {listIsLoading && <CardSkeleton cards={8} />}
      {!listIsLoading && list && !listError && (
        <>
          <CardsList
            list={sorted}
            info={list.data.info}
            page={currPage}
            setPage={setPage}
          />
        </>
      )}
      {listError && <ErrorMessage message={listError.message} />}
    </>
  );
};
