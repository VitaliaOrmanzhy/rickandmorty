import React from "react";

export const PaginationButton = ({ val, handleSetPage, className }) => {
  return (
    <button
      className={`pagination-button ml-[10px] mr-[10px] ${className}`}
      onClick={() => handleSetPage(val)}
    ></button>
  );
};
