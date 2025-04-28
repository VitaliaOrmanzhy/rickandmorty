import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useGetPage = () => {
  const { page } = useParams();
  const [currPage, setPage] = useState(page || 1);

  //   useEffect(() => {
  //     setPage(Number(page) || 1);
  //   }, [page]);

  return [currPage, setPage];
};
