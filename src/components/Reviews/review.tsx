"use client";

import useSWR from "swr";
import { useRef } from "react";

import { useWindowSize } from "usehooks-ts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ReviewComponent from "./review-component";
import ReviewComponentSkeleton from "./review-component-skeleton";
// import { cn } from "@/lib/utils";

type Review = {
  name: string;
  platform: "VK" | "WB";
  review: string;
  rating?: number;
  link: string;
};

const fetcher = (url: string | URL | Request) => fetch(url).then<Review[]>((r) => r.json());

function Reviews() {
  const pathname = usePathname();

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
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full flex flex-col max-w-screen-lg px-2" ref={ref}>
        <div className="w-full flex justify-between">
          <div className="relative">
            {pathname === `/reviews` ? (
              <p className="relative text-3xl font-semibold tracking-tight">Отзывы</p>
            ) : (
              <Link className="relative text-3xl font-semibold tracking-tight" href="/reviews">
                Отзывы
              </Link>
            )}
            {data && (
              <div className="absolute text-sm top-0 -right-8 bg-primary rounded-3xl px-2">{Math.floor(data?.length / 10) * 10}+</div>
            )}
          </div>
        </div>

        <Carousel
          className="w-full mt-6"
          opts={{ loop: true, slidesToScroll: data && data.length ? visibleItemsCalculate(width) : 1 }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          {!isLoading && data && !error ? (
            <>
              <CarouselContent>
                {data.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <ReviewComponent review={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="w-12 h-12 -left-14 hidden xl:flex" variant="default" />
              <CarouselNext className="w-12 h-12 -right-14 hidden xl:flex" variant="default" />
            </>
          ) : (
            <>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ReviewComponentSkeleton />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ReviewComponentSkeleton />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ReviewComponentSkeleton />
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious className="w-12 h-12 -left-14 hidden lg:flex" variant="default" />
              <CarouselNext className="w-12 h-12 -right-14 hidden lg:flex" variant="default" /> */}
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
