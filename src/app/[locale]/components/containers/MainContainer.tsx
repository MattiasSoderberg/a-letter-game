import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center p-5 relative z-20">
      {children}
    </div>
  );
};

export default MainContainer;
