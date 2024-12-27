import React, { ReactElement } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { HomeIcon } from "@primer/octicons-react";

type Props = {
  children: ReactElement;
  disableHome?: boolean;
};

export function Breadcrumbs({ children, disableHome }: Props) {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <Breadcrumb className="w-full max-w-screen-lg px-4">
        <BreadcrumbList>
          {!disableHome && (
            <>
              <BreadcrumbItem className="flex gap-1">
                <BreadcrumbLink className="flex gap-1 justify-center items-center" href="/">
                  <HomeIcon /> Главная
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          {children}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
