"use client";

import useSWR from "swr";
import { useRef } from "react";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReviewComponent from "./ReviewComponent";
import { useWindowSize } from "usehooks-ts";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
// import cn from "@/utils/cn";

type Review = {
  name: string;
  platform: "VK" | "WB";
  review: string;
  rating?: number;
  link: string;
};

const fetcher = (url: string | URL | Request) => fetch(url).then<Review[]>((r) => r.json());

function Reviews() {
  const { data, error, isLoading } = useSWR("/api/reviews/get_reviews", fetcher);
  // eslint-disable-next-line no-unused-vars
  // const [reviews, setReviews] = useState<Review[]>(data);

  const ref = useRef<HTMLDivElement>(null);

  // Current width of element
  const { width } = useWindowSize();

  const visibleItemsCalculate = (width: number) => {
    if (width > 1020) {
      return 3;
    }
    if (width > 768) {
      return 2;
    }

    return 1;
  };

  // const satisfiedCustomers = data ? data.reduce((total, item) => total + (item.rating ?? 5), 0) / data.length : -1.1;

  return (
    <div className="flex flex-col gap-2 mt-10 overflow-hidden" ref={ref}>
      <div className="flex justify-between flex-wrap">
        <p className="text-xl lg:text-2xl font-bold" id="description">
          Отзывы
        </p>
        {/* <p className="text-xl lg:text-2xl font-semibold">
          Средняя оценка{" "}
          <span className={cn("font-bold text-xl lg:text-2xl", { "opacity-0": satisfiedCustomers < 0 })}>
            {satisfiedCustomers.toFixed(1)}
          </span>
        </p> */}
      </div>

      {width !== 0 && !isLoading && data && !error ? (
        <CarouselProvider
          interval={6000}
          isPlaying={true}
          touchEnabled={false}
          // dragEnabled={false}
          disableKeyboard
          infinite
          visibleSlides={visibleItemsCalculate(width)}
          naturalSlideWidth={320}
          isIntrinsicHeight
          naturalSlideHeight={360}
          totalSlides={data.length}
        >
          <Slider classNameTray="md:gap-4 !mb-2">
            {data.map((item, i) => (
              <Slide index={i} key={i}>
                <ReviewComponent item={item} />
              </Slide>
            ))}
          </Slider>
          <div className="flex gap-1 mt-2 mb-2">
            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <ButtonBack className="btn text-secondary w-full lg:w-12">
                <ChevronLeftIcon size={36} />
              </ButtonBack>
            </div>
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <ButtonNext className="btn text-secondary w-full lg:w-12">
                <ChevronRightIcon size={36} />
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      ) : (
        <div className="flex flex-col justify-center items-center p-4 min-h-[296px] max-h-[296px] mx-1">
          <span className="loading loading-spinner loading-xl flex-shrink-0" />
        </div>
      )}
    </div>
  );
}

export default Reviews;
