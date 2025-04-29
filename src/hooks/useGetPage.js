import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

export const useGetPage = (initial) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const [currPage, setPage] = useState(pageParam || 1);

  return [currPage, setPage];
};
