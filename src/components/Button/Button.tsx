import React from "react";

interface ButtonProps {
  label: string;
  className: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  handleClick,
}) => {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};
