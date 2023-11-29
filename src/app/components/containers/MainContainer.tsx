import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 px-5 pt-8 pb-24 relative z-20 md:p-20 lg:px-60 xl:px-80 2xl:px-96 overflow-y-auto">
      {children}
    </div>
  );
};

export default MainContainer;
