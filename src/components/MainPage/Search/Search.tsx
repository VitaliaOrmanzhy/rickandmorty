import React from "react";
import searchIcon from "../../../img/icon/search/Vector.svg";

interface SearchProps {
  inputText: string;
  setInputText: (val: string) => void;
  setPage: (val: number) => void;
}

export const Search: React.FC<SearchProps> = ({
  inputText,
  setInputText,
  setPage,
}) => {
  const handleChange = (val: string) => {
    setInputText(val);
    setPage(1);

    // if (!val) {
    //   setPage(1);
    // }
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
