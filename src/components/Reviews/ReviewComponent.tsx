import { useIsOverflow } from "@/hooks/useIsOverflow";
import { cn } from "@/lib/utils";
import {
  ArrowSwitchIcon,
  CheckCircleFillIcon,
  FoldDownIcon,
  FoldUpIcon,
  PersonFillIcon,
  ThumbsdownIcon,
  ThumbsupIcon,
} from "@primer/octicons-react";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

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

function ReviewComponent({
  review,
}: {
  review: {
    name: string;
    platform: "VK" | "WB";
    review: string;
    rating?: number;
    link: string;
    reply?: string;
  };
}) {
  const [showResponse, setShowResponse] = useState(review.platform === "WB" && review.rating && review.rating <= 3 ? true : false);
  const reviewRef = useRef<HTMLParagraphElement>(null);
  const { isOverflow, recalculateOverflow } = useIsOverflow(reviewRef as MutableRefObject<HTMLElement>);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (state?: boolean) => {
    setShowMore(state ?? !showMore);
  };

  useEffect(() => {
    setTimeout(() => recalculateOverflow(), 250);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        "flex relative flex-col justify-between py-4 px-2 lg:px-4 bg-base-200 rounded-lg shadow-md min-h-[240px] max-h-[240px] md:mx-1",
        { "max-h-[999px]": showMore }
      )}
    >
      <div className={cn("flex flex-1 justify-center px-2 rounded-md mb-6 bg-base-100 items-center", { "mb-0": isOverflow })}>
        <p
          className={cn("text-center max-h-[152px] overflow-hidden text-sm md:text-base", {
            "overflow-auto max-h-[999px]": showMore,
          })}
          ref={reviewRef}
        >
          {showResponse ? (
            <>
              <span className=" font-bold">Ответ представителя: </span>
              {review.reply}
            </>
          ) : (
            review.review
          )}
        </p>
      </div>
      {isOverflow && (
        <button onBlur={() => toggleShowMore(false)} className=" text-secondary cursor-pointer" onClick={() => toggleShowMore()}>
          {!showMore ? <FoldDownIcon /> : <FoldUpIcon />}
        </button>
      )}

      <div className="flex flex-nowrap gap-y-2 justify-between">
        {showResponse ? (
          <div className="flex gap-1 items-center py-1 px-3">
            <CheckCircleFillIcon />
            <p className="font-semibold">МнеПодписку</p>
          </div>
        ) : (
          <div className="flex gap-1 items-center py-1 px-3">
            <PersonFillIcon />

            <p className="font-semibold">{review.name}</p>
          </div>
        )}
        <a
          className="flex gap-2 items-center py-1 px-3 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          // href={review.platform === "WB" ? "https://www.wildberries.ru/seller/820694" : "https://vk.com/topic-221413404_49184185"}
          href={review.link}
        >
          {review.rating && review.rating > 3 && <ThumbsupIcon className=" text-green-400" />}
          {review.rating && review.rating <= 3 && <ThumbsdownIcon className=" text-red-400" />}

          <PlatformComponent platform={review.platform} />
        </a>
      </div>

      {review.reply && (
        <button
          className="btn btn-outline btn-primary absolute top-2 right-2 w-6 h-6 min-h-[24px]"
          onClick={() => {
            setShowResponse(!showResponse);
            if (!showResponse) {
              setShowMore(true);
            } else {
              setShowMore(false);
            }
          }}
        >
          <ArrowSwitchIcon />
        </button>
      )}
    </div>
  );
}

export default ReviewComponent;
