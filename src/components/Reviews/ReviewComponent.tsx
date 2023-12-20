import { useIsOverflow } from "@/hooks/useIsOverflow";
import cn from "@/utils/cn";
import { FoldDownIcon, FoldUpIcon, PersonFillIcon, ThumbsdownIcon, ThumbsupIcon } from "@primer/octicons-react";
import React, { useRef, useState } from "react";

const PlatformComponent = ({ platform }: { platform: "VK" | "WB" }) => {
  if (platform === "VK") {
    return (
      <div className="bg-[#0077ff] px-1 py-[2px] rounded-lg flex justify-center items-center text-sm text-white font-bold">VK</div>
    );
  }
  if (platform === "WB") {
    return (
      <div className="bg-gradient-to-r from-[#b50fa0] to-[#55117a] px-1 py-[2px] rounded-lg flex justify-center items-center text-sm text-white font-bold">
        WB
      </div>
    );
  }
};

type Props = {
  item: {
    name: string;
    platform: "VK" | "WB";
    review: string;
    rating: number;
  };
};

function ReviewComponent({ item }: Props) {
  const reviewRef = useRef<HTMLParagraphElement>(null);
  const isOverflow = useIsOverflow(reviewRef);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (state?: boolean) => {
    setShowMore(state ?? !showMore);
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-between py-4 px-2 lg:px-4 bg-base-200 rounded-lg shadow-md min-h-[240px] max-h-[240px] md:mx-1",
        { "max-h-[999px]": showMore }
      )}
    >
      <div className="flex flex-1 justify-center items-center">
        <p
          className={cn("text-center bg-base-100 p-2 rounded-md max-h-[148px] overflow-hidden", {
            "overflow-auto max-h-[999px]": showMore,
          })}
          ref={reviewRef}
        >
          {item.review}
        </p>
      </div>
      {isOverflow && (
        <button onBlur={() => toggleShowMore(false)} className=" text-secondary cursor-pointer" onClick={() => toggleShowMore()}>
          {!showMore ? <FoldDownIcon /> : <FoldUpIcon />}
        </button>
      )}

      <div className="flex flex-nowrap gap-y-2 justify-between">
        <div className="flex gap-1 bg-base-100 rounded-md items-center py-1 px-3">
          <PersonFillIcon />

          <p className="font-semibold">{item.name}</p>
        </div>
        <a
          className="flex gap-2 bg-base-100 rounded-md items-center py-1 px-3 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          href={item.platform === "WB" ? "https://www.wildberries.ru/seller/820694" : "https://vk.com/topic-221413404_49184185"}
        >
          <div className="flex gap-2 items-center">
            {item.rating > 3 ? <ThumbsupIcon className=" text-green-400" /> : <ThumbsdownIcon className=" text-red-400" />}
          </div>

          <PlatformComponent platform={item.platform} />
        </a>
      </div>
    </div>
  );
}

export default ReviewComponent;
