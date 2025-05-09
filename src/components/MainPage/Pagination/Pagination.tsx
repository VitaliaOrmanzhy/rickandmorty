import React from "react";
import { PaginationButton } from "./PaginationButton/PaginationButton";

interface PaginationProps {
  prev: number | null;
  next: number | null;
  page: number;
  setPage: (val: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  prev,
  next,
  page,
  setPage,
}) => {
  const handleSetPage = (val: number) => {
    if (val !== page) setPage(val);
  };

  return (
    <div className="pagination m-[10px]">
      <PaginationButton
        val={prev}
        handleSetPage={handleSetPage}
        className={"pagination-prev"}
      />
      <span> {page} </span>
      <PaginationButton
        val={next}
        handleSetPage={handleSetPage}
        className={"pagination-next"}
      />
    </div>
  );
};
