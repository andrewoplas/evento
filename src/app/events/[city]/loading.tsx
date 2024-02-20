import SkeletonCard from "@/components/skeleton-card";

const Loading = () => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
    {Array.from({ length: 8 }).map((index, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default Loading;
