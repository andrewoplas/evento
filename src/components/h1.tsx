import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const H1 = ({ className, children }: Props) => (
  <h1
    className={cn(
      "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight",
      className
    )}
  >
    {children}
  </h1>
);

export default H1;
