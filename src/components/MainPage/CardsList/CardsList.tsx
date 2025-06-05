import React from "react";
import { Card } from "../Card/Card";
import { getPageNumberFromURL } from "../../../utils/getPageNumber";
import { Pagination } from "../Pagination/Pagination";
import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";
import { CharacterType } from "../../../types/types";

interface CardsListProps {
  list: CharacterType[];
  info: {
    next: string | null;
    prev: string | null;
  };
  page: number;
  setPage: (val: number) => void;
}

export const CardsList: React.FC<CardsListProps> = ({
  list,
  info,
  page,
  setPage,
}) => {
  return (
    <>
      {!list && <ErrorMessage message="This page doesn't exist" />}
      {list && (
        <>
          <div className="grid gap-[25px] grid-cols-2 max-[480px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[40px]">
            {list &&
              list.map((item) => {
                return <Card item={item} />;
              })}
          </div>
          <Pagination
            next={info.next ? getPageNumberFromURL(info.next) : null}
            page={page}
            prev={info.prev ? getPageNumberFromURL(info.prev) : null}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};
