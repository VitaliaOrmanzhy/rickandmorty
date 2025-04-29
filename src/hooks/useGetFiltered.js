import { useState } from "react";
import { useSearchParams } from "react-router";

export const useGetFiltered = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filtered = searchParams.get("filtered");

  const [inputText, setInputText] = useState(filtered || "");
  return [inputText, setInputText];
};
