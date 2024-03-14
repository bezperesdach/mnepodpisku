import Link from "next/link";
import Image from "next/image";
import { NavbarSearch } from "./navbar-search";

export function MainNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#09122b]/95 backdrop-blur supports-[backdrop-filter]:bg-[#09122b]/60">
      <div className="px-2 md:px-4 flex h-14 max-w-screen-lg items-center mx-auto">
        <Link className="flex flex-1 gap-1 items-center justify-start" href="/">
          <Image className="" src="/VK_logo.png" width={36} height={36} alt="логотип" />

          <p className="text-2xl font-bold">МНЕПОДПИСКУ.РФ</p>
        </Link>
        <div className="h-8 w-auto flex-none">
          <NavbarSearch />
        </div>
      </div>
    </header>
  );
}
