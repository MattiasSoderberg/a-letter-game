import React from "react";

interface Props {
  children: React.ReactNode;
}

const TextContainer = ({ children }: Props) => {
  return (
    <div className="w-full h-max flex flex-col gap-6 bg-textContainerBG p-4 rounded-lg shadow">
      {children}
    </div>
  );
};

export default TextContainer;
