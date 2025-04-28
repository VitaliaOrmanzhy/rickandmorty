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
import { useNavigate } from "react-router";
import { useGetPage } from "../../hooks/useGetPage";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "./Card/CardSkeleton";

export const MainPage = () => {
  const navigate = useNavigate();
  const [currPage, setPage] = useGetPage();
  const [inputText, setInputText] = useState("");
  const [debouncedValue] = useDebounce(inputText, 500);

  useEffect(() => {
    navigate(`/${currPage}`, { replace: true });
  }, [currPage, navigate]);

  const { data: list, isLoading: listIsLoading } = useQuery({
    queryFn: () => fetchCharacters(currPage),
    queryKey: ["cards", currPage],
  });

  const { data: filtered } = useQuery({
    queryFn: () => filterByName(debouncedValue),
    queryKey: ["filtered", debouncedValue],
  });

  let sorted;
  if (list) sorted = sortArrByName([...list.data.results]);

  return (
    <>
      <Logo />
      <Search inputText={inputText} setInputText={setInputText} />
      {listIsLoading && <CardSkeleton cards={8} />}
      {!listIsLoading && (
        <>
          <CardsList list={filtered ? filtered.data.results : sorted} />
          <Pagination
            next={getPageNumber(list.data.info.next)}
            page={currPage}
            prev={getPageNumber(list.data.info.prev)}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};
