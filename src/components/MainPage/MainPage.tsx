import React, { useEffect } from "react";
import { CardsList } from "./CardsList/CardsList";
import { fetchCharacters, filterByName } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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

export const MainPage = () => {
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setPage] = useGetPage();
  const [filteredPage, setFilteredPage] = useState(1);
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
      params.set("page", filteredPage.toString());
    }

    setSearchParams(params);
  }, [debouncedValue, filteredPage]);

  const { data: list, isLoading: listIsLoading } = useQuery<ListType>({
    queryFn: () => fetchCharacters(currPage),
    queryKey: ["cards", currPage],
  });

  const { data: filtered, isLoading: filteredIsLoading } = useQuery<ListType>({
    queryFn: () => filterByName(debouncedValue, filteredPage),
    queryKey: ["filtered", debouncedValue, filteredPage],
  });

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
        setFilteredPage={setFilteredPage}
      />
      {(listIsLoading || filteredIsLoading) && <CardSkeleton cards={8} />}
      {!listIsLoading && list && !filteredIsLoading && (
        <>
          <CardsList
            list={filtered ? filtered.data.results : sorted}
            info={filtered ? filtered.data.info : list.data.info}
            page={filtered ? filteredPage : currPage}
            setPage={filtered ? setFilteredPage : setPage}
          />
        </>
      )}
    </>
  );
};
