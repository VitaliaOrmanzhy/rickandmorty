import React from "react";
import { Card } from "../Card/Card";

export const CardsList = ({ list }) => {
  console.log("LIST", list);
  return (
    <div className="grid gap-[25px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[40px]">
      {list &&
        list.map((item) => {
          return <Card item={item} />;
        })}
    </div>
  );
};
