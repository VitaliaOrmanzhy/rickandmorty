import React from "react";
import Skeleton from "react-loading-skeleton";

interface CardSkeletonProps {
  cards: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ cards }) => {
  return (
    <div className="grid gap-[25px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[40px]">
      {Array(cards)
        .fill(0)
        .map((item, idx) => (
          <div
            key={idx}
            className="card overflow-hidden rounded-md shadow-[0px_2px_4px_0px_#00000024]"
          >
            <div className="image-container h-[168px] overflow-hidden">
              <Skeleton className="image w-100% mt-[-30px]" height={168} />
            </div>
            <div className="info pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-left">
              <Skeleton count={2} />
            </div>
          </div>
        ))}
    </div>
  );
};
