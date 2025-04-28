import React from "react";
import { PaginationButton } from "./PaginationButton/PaginationButton";

export const Pagination = ({ prev, next, page, setPage }) => {
  const handleSetPage = (val) => {
    if (val !== page) setPage(val);
  };

  return (
    <div className="pagination m-[10px]">
      {prev && (
        <PaginationButton
          val={prev}
          handleSetPage={handleSetPage}
          className={"pagination-prev"}
        />
      )}
      <span> {page} </span>
      {next && (
        <PaginationButton
          val={next}
          handleSetPage={handleSetPage}
          className={"pagination-next"}
        />
      )}
    </div>
  );
};
