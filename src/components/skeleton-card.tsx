import { cn } from "@/lib/utils";
import React from "react";
import Skeleton from "./skeleton";

type Props = {
  className?: string;
};

const SkeletonCard = ({ className }: Props) => (
  <div className="space-y-4">
    <Skeleton className="h-[200px] w-full" />
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
);

export default SkeletonCard;
