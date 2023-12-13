"use client";

import React from "react";
import { catalogueItems } from "../Navbar/Navbar";
import cn from "@/utils/cn";
import { XIcon } from "@primer/octicons-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  toggleCatalogue: () => void;
};

const Catalogue = ({ toggleCatalogue }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col w-full max-w-[1240px] h-[64px] mx-auto pt-2 lg:pt-8">
        <div className={cn("flex w-full justify-end items-center" /* , { "cursor-wait": loading.value } */)}>
          <button onClick={toggleCatalogue}>
            {" "}
            <XIcon
              className={cn(
                "cursor-pointer h-14 w-14 text-white transition-transform" /* , {
              "cursor-wait": loading.value,
              "hover:scale-125": !loading.value,
            } */
              )}
            />
          </button>
        </div>
      </div>
      <div className="grid w-full max-w-[1240px] mx-auto grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-2 lg:mt-8 px-4 xl:px-0 overflow-y-scroll lg:overflow-visible">
        {Object.keys(catalogueItems).map((item) => (
          // <>
          //   {
          // saleItems.includes(item) ? (
          //   // BLACK FRIDAY STYLE START`
          //   <div
          //     key={item}
          //     className={cn(
          //       "relative flex justify-start items-center gap-2 md:gap-4 rounded-lg p-2 transition-transform overflow-hidden bg-base-200 ",
          //       {
          //         "cursor-wait after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black after:rounded-lg after:opacity-30":
          //           loading.value,
          //         "hover:scale-[105%]": location.url.pathname !== `/${item}` && !loading.value,
          //       }
          //     )}
          //   >
          //     <div className="flex justify-start items-center gap-2 px-2 py-2 md:py-4 md:px-4">
          //       {catalogueItems[item as keyof typeof catalogueItems].logo}
          //       <p className="text-xl md:text-2xl font-semibold">{catalogueItems[item as keyof typeof catalogueItems].name}</p>
          //       {location.url.pathname === `/${item}` ? (
          //         <button
          //           className={cn("absolute bottom-0 right-0 top-0 left-0", { "cursor-wait": loading.value })}
          //           onClick$={() => (showCatalogue.value = false)}
          //         />
          //       ) : (
          //         <Link
          //           className={cn("absolute bottom-0 right-0 top-0 left-0 min-h-[80px]", { "pointer-events-none": loading.value })}
          //           href={`/${item}`}
          //           onClick$={() => (loading.value = true)}
          //         />
          //       )}
          //     </div>
          //     {/* BLACK FRIDAY STYLE END */}
          //   </div>
          // ) : (
          <div
            key={item}
            className={cn(
              "relative flex justify-start items-center gap-2 md:gap-4 bg-base-200 rounded-lg p-2 md:p-4 transition-transform min-h-[80px]"
              // {
              //   "cursor-wait after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black after:rounded-lg after:opacity-30":
              //     loading.value,
              //   "hover:scale-[105%]": location.url.pathname !== `/${item}` && !loading.value,
              // }
            )}
          >
            {catalogueItems[item as keyof typeof catalogueItems].logo}
            <p className="text-xl md:text-2xl font-semibold">{catalogueItems[item as keyof typeof catalogueItems].name}</p>
            {pathname === `/${item}` ? (
              <button className={cn("absolute bottom-0 right-0 top-0 left-0")} onClick={toggleCatalogue} />
            ) : (
              <Link className={cn("absolute bottom-0 right-0 top-0 left-0")} href={`/${item}`} onClick={toggleCatalogue} />
            )}
          </div>
          // )}
          // </>
        ))}
      </div>
    </>
  );
};

export default Catalogue;
// export const Catalogue = component$(({ showCatalogue }: Props) => {
//   const location = useLocation();
//   const loading = useSignal(false);

//   useVisibleTask$(({ track }) => {
//     track(() => location.isNavigating);

//     if (location.isNavigating === false) {
//       showCatalogue.value = false;
//       loading.value = false;
//     }
//   });

//   // SALE ITEMS
//   // const saleItems = ["adobe_creative_cloud", "playstation_account", "playstation"];

//   return (

//   );
// });
