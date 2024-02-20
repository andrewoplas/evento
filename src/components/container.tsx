import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen max-w-[1200px] mx-auto bg-white/[2%]">
      {children}
    </div>
  );
};

export default Container;
