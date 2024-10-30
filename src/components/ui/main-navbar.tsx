import Link from "next/link";
import Image from "next/image";
import { NavbarSearch } from "./navbar-search";

export function MainNavbar() {
  return (
    <header className="sticky -top-[54px] sm:top-0 z-20 w-full border-b border-border/40 bg-[#0D1531]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0D1531]/60">
      <div className="pt-2 sm:pt-0 px-2 md:px-4 flex flex-col pb-2 items-start sm:pb-0 gap-y-4 sm:flex-row sm:h-14 max-w-screen-lg sm:items-center mx-auto">
        <Link className="flex flex-1 gap-1 items-center justify-start" href="/">
          <Image className="" src="/site_logo.webp" width={42} height={42} alt="логотип" />

          <p className="text-2xl font-bold">МНЕПОДПИСКУ.RU</p>
        </Link>
        <div className="h-8 w-full sm:w-auto flex-none">
          <NavbarSearch />
        </div>
      </div>
    </header>
  );
}
