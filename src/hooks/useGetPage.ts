import { useState } from "react";
import { useSearchParams } from "react-router";

export const useGetPage = (): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [currPage, setPage] = useState(page);

  return [currPage, setPage];
};
