import React from "react";
import { Card } from "../Card/Card";
import { getPageNumber } from "../../../utils/getPageNumber";
import { Pagination } from "../Pagination/Pagination";

export const CardsList = ({ list, info, page, setPage }) => {
  console.log("LIST", list);
  return (
    <>
      <div className="grid gap-[25px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[40px]">
        {list &&
          list.map((item) => {
            return <Card item={item} />;
          })}
      </div>
      <Pagination
        next={getPageNumber(info.next)}
        page={page}
        prev={getPageNumber(info.prev)}
        setPage={setPage}
      />
    </>
  );
};
