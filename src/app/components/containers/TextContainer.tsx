import React from "react";

interface Props {
  children: React.ReactNode;
  shadowColor?: string;
  padding?: boolean;
}

const TextContainer = ({
  children,
  shadowColor = "lightDark",
  padding = true,
}: Props) => {
  return (
    <div
      className={`w-full h-max flex flex-col gap-6 bg-textContainerBG ${
        padding && "p-4"
      } rounded-lg container-shadow shadow-${shadowColor} transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default TextContainer;
