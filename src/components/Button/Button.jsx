import React from "react";

export const Button = ({ label, className, handleClick }) => {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};
