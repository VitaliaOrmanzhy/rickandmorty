import React from "react";

interface PaginationButtonProps {
  val: number | null;
  handleSetPage: (val: number) => void;
  className: string;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  val,
  handleSetPage,
  className,
}) => {
  return (
    <button
      className={`pagination-button ml-[10px] mr-[10px] ${className} ${
        !val && "opacity-[0.4]"
      }`}
      onClick={() => {
        if (val) handleSetPage(val);
      }}
    ></button>
  );
};
