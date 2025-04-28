import React, { useState } from "react";

export const Search = ({ inputText, setInputText }) => {
  const handleChange = (val) => {
    setInputText(val);
  };

  return (
    <input
      className="w-full p-[16px] border border-[#00000080] rounded-[8px]"
      placeholder="Filter by name"
      onChange={(e) => handleChange(e.target.value)}
      value={inputText}
    />
  );
};
