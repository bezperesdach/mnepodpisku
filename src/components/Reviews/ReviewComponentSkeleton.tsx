import { PersonFillIcon } from "@primer/octicons-react";

const ReviewComponentSkeleton = () => {
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
};

export default ReviewComponentSkeleton;
