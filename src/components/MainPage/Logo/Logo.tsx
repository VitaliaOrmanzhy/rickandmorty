import React from "react";

interface LogoProps {
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return <img className="ml-auto mr-auto mb-[10px]" src={src} alt="Logo" />;
};
