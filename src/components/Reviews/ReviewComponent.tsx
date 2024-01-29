import { useIsOverflow } from "@/hooks/useIsOverflow";
import cn from "@/utils/cn";
import {
  ArrowSwitchIcon,
  CheckCircleFillIcon,
  FoldDownIcon,
  FoldUpIcon,
  PersonFillIcon,
  ThumbsdownIcon,
  ThumbsupIcon,
} from "@primer/octicons-react";
import React, { useEffect, useRef, useState } from "react";

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
  item?: {
    name: string;
    platform: "VK" | "WB";
    review: string;
    rating?: number;
    link: string;
    reply?: string;
  };
  skeleton?: boolean;
};

function Review({
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
  const { isOverflow, recalculateOverflow } = useIsOverflow(reviewRef);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (state?: boolean) => {
    setShowMore(state ?? !showMore);
  };

  useEffect(() => {
    recalculateOverflow();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewRef.current?.clientHeight, reviewRef.current?.scrollHeight]);

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

function ReviewComponent({ item, skeleton }: Props) {
  if (skeleton) {
    return (
      <div className="flex relative flex-col justify-between py-4 px-2 lg:px-4 bg-base-200 rounded-lg shadow-md min-h-[240px] max-h-[240px] md:mx-1 skeleton">
        {/* <span className="loading loading-spinner loading-xl flex-shrink-0" /> */}

        <div className="flex flex-1 justify-center px-2 rounded-md mb-6 bg-base-100 items-center">
          <p className="text-center max-h-[152px] overflow-hidden text-sm md:text-base">
            <span className="text-transparent rounded-lg bg-base-content/20 max-w-sm">testtesttesttesttesttesttesttest</span>
          </p>
        </div>

        <div className="flex flex-nowrap gap-y-2 justify-between">
          <div className="flex gap-1 items-center py-1 px-3 animate-pulse">
            <PersonFillIcon className="text-base-content/50" />
            <p className="font-semibold w-10 bg-base-content/50 text-transparent rounded-lg">loading</p>
          </div>

          <div className="flex gap-2 items-center py-1 px-3 cursor-pointer">
            <p className="px-1 py-[2px] rounded-lg flex justify-center items-center text-sm text-transparent bg-base-content/20 font-bold">
              VK
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (item) {
    return <Review review={item} />;
  }
}

export default ReviewComponent;
