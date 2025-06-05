import React from "react";
import { imagePlaceholder } from "../../../constants/constants";
import { NavLink } from "react-router";
import { routes } from "../../../routes/routes";
import { CharacterType } from "../../../types/types";

interface CardProps {
  item: CharacterType;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <NavLink
      to={routes.character + item.id}
      className="card overflow-hidden rounded-md shadow-[0px_2px_4px_0px_#00000024]"
    >
      <div className="image-container h-[168px] overflow-hidden">
        <img
          className="image w-[100%] mt-[-30px]"
          src={item.image || imagePlaceholder}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="info pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-left">
        <h3 className="text-xl font-medium text-[#000000DE]">{item.name}</h3>
        <span className="text-sm font-normal text-[#00000099]">
          {item.species}
        </span>
      </div>
    </NavLink>
  );
};
