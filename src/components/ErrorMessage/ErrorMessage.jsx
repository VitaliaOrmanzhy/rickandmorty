import React from "react";

export const ErrorMessage = ({ message }) => {
  return (
    <p className="text-red-500 bg-red-100 border border-red-300 rounded-md px-4 py-2 mt-[30px] text-sm">
      {message}
    </p>
  );
};
