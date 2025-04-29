import React, { useEffect } from "react";
import { CardsList } from "./CardsList/CardsList";
import { fetchCharacters, filterByName } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "./Pagination/Pagination";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { getPageNumber } from "../../utils/getPageNumber";
import { Search } from "./Search/Search";
import { sortArrByName } from "../../utils/sortArrByName";
import { Logo } from "./Logo/Logo";
import { useNavigate, useSearchParams } from "react-router";
import { useGetPage } from "../../hooks/useGetPage";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "./Card/CardSkeleton";
import { useGetFiltered } from "../../hooks/useGetFiltered";

export const MainPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setPage] = useGetPage();
  const [filteredPage, setFilteredPage] = useState(1);
  const [inputText, setInputText] = useGetFiltered();
  const [debouncedValue] = useDebounce(inputText, 500);
  debugger;

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!debouncedValue) {
      params.delete("filtered", debouncedValue);
      params.set("page", currPage);
    } else {
      params.set("filtered", debouncedValue);
      params.set("page", filteredPage);
    }

    setSearchParams(params);
  }, [debouncedValue, filteredPage]);

  const { data: list, isLoading: listIsLoading } = useQuery({
    queryFn: () => fetchCharacters(currPage),
    queryKey: ["cards", currPage],
  });

  const { data: filtered, isLoading: filteredIsLoading } = useQuery({
    queryFn: () => filterByName(debouncedValue, filteredPage),
    queryKey: ["filtered", debouncedValue, filteredPage],
  });

  let sorted;
  if (list) sorted = sortArrByName([...list.data.results]);

  return (
    <>
      <Logo />
      <Search
        inputText={inputText}
        setInputText={setInputText}
<<<<<<< HEAD
        setFilteredPage={setFilteredPage}
        setCurrPage={setPage}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {(listIsLoading || filteredIsLoading) && <CardSkeleton cards={8} />}
      {!listIsLoading && !filteredIsLoading && (
=======
        setPage={setPage}
        setFilteredPage={setFilteredPage}
      />
      {listIsLoading && <CardSkeleton cards={8} />}
      {!listIsLoading && (
>>>>>>> f0ef265 (page search params, filtered search param)
        <>
          <CardsList
            list={filtered ? filtered?.data.results : sorted}
            info={filtered ? filtered?.data.info : list?.data.info}
            page={filtered ? filteredPage : currPage}
            setPage={filtered ? setFilteredPage : setPage}
          />
        </>
      )}
    </>
  );
};
