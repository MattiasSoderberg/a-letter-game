import React from "react";

interface Props {
  children: React.ReactNode;
  shadowColor?: string;
}

const TextContainer = ({ children, shadowColor = "lightDark" }: Props) => {
  return (
    <div
      className={`w-full h-max flex flex-col gap-6 bg-textContainerBG p-4 rounded-lg container-shadow shadow-${shadowColor}`}
    >
      {children}
    </div>
  );
};

export default TextContainer;
