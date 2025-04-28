import React, { useState } from "react";
import searchIcon from "../../../img/icon/search/Vector.svg";

export const Search = ({ inputText, setInputText }) => {
  const handleChange = (val) => {
    setInputText(val);
  };

  return (
    <div className="search relative">
      <label
        htmlFor="search"
        className="absolute top-[50%] left-[15px] transform translate-x-0 translate-y-[-50%]"
      >
        <img src={searchIcon} alt="icon" />
      </label>

      <input
        className="w-full p-[16px] pl-[40px] border border-[#00000080] rounded-[8px]"
        placeholder="Filter by name"
        onChange={(e) => handleChange(e.target.value)}
        value={inputText}
        name="search"
        id="search"
      />
    </div>
  );
};
