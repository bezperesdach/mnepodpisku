"use client";

import * as React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services_list";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-alert-dialog";
import Image from "next/image";

export function NavbarSearch({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-full w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="inline-flex sm:hidden lg:inline-flex">Поиск по сайту...</span>
        <span className="hidden md:inline-flex lg:hidden">Поиск...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] h-5 select-none items-center gap-1 rounded border bg-primary px-1.5 font-mono text-[10px] font-medium opacity-100 flex">
          <MagnifyingGlassIcon className="h-4 w-4" />
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Введите для поиска..." />
        <CommandList>
          <CommandEmpty>Ничего не найдено.</CommandEmpty>
          <CommandGroup heading="Популярные услуги">
            <CommandItem
              className="cursor-pointer"
              key={"playstation_popular"}
              value={"playstation_popular"}
              onSelect={() => {
                runCommand(() => router.push("playstation"));
              }}
            >
              <div className="relative flex justify-center items-center mr-2 h-5 w-5">
                <Image
                  className="w-auto h-full"
                  src="/catalogue_icons/bw/playstation.png"
                  alt="PlayStation логотип"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="20vw"
                />
              </div>
              <span>PlayStation Пополнение</span>
            </CommandItem>
            <CommandItem
              className="cursor-pointer"
              key={"playstation_plus_popular"}
              value={"playstation_plus_popular"}
              onSelect={() => {
                runCommand(() => router.push("ps_plus"));
              }}
            >
              <div className="relative flex justify-center items-center mr-2 h-5 w-5">
                <Image
                  className="w-auto h-full"
                  src="/catalogue_icons/bw/ps_plus.png"
                  alt="PlayStation Plus логотип"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="20vw"
                />
              </div>
              <span>PlayStation Plus</span>
            </CommandItem>
            <CommandItem
              className="cursor-pointer"
              key={"playstation_account_popular"}
              value={"playstation_account_popular"}
              onSelect={() => {
                runCommand(() => router.push("playstation_account"));
              }}
            >
              <div className="relative flex justify-center items-center mr-2 h-5 w-5">
                <Image
                  className="w-auto h-full"
                  src="/catalogue_icons/bw/playstation.png"
                  alt="PlayStation Аккаунт логотип"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="20vw"
                />
              </div>
              <span>PlayStation Аккаунт</span>
            </CommandItem>
            <CommandItem
              className="cursor-pointer"
              key={"spotify_popular"}
              value={"spotify_popular"}
              onSelect={() => {
                runCommand(() => router.push("spotify"));
              }}
            >
              <div className="relative flex justify-center items-center mr-2 h-5 w-5">
                <Image
                  className="w-auto h-full"
                  src="/catalogue_icons/bw/spotify.png"
                  alt="Spotify Premium логотип"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="20vw"
                />
              </div>
              <span>Spotify Премиум</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Все сервисы">
            {services.map((service) => (
              <CommandItem
                className="cursor-pointer"
                keywords={service.keywords}
                key={service.name}
                value={service.value}
                onSelect={() => {
                  runCommand(() => router.push(service.value));
                }}
              >
                <div className="relative flex justify-center items-center mr-2 h-5 w-5 ">
                  <Image
                    className="w-auto h-full"
                    src={`/catalogue_icons/bw/${service.value}.png`}
                    alt={service.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="20vw"
                  />
                </div>
                <span>{service.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
