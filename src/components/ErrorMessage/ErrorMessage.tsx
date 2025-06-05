import React from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="max-w-[400px] m-auto flex items-center justify-center">
      <p className="text-red-500 bg-red-100 border border-red-300 rounded-md px-4 py-2 mt-[30px] text-sm">
        {message}
      </p>
    </div>
  );
};
