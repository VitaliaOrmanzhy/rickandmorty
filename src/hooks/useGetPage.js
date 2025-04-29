import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

export const useGetPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page");
  const [currPage, setPage] = useState(page || 1);

  return [currPage, setPage];
};
