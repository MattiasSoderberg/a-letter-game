import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 px-5 py-8 relative z-20 md:p-20">
      {children}
    </div>
  );
};

export default MainContainer;
