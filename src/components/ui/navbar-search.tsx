"use client";

import * as React from "react";
import { RocketIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

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
          "relative h-full w-10 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Поиск по сайту...</span>
        <span className="hidden md:inline-flex lg:hidden">Поиск...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <MagnifyingGlassIcon className="h-4 w-4" />
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Введите для поиска..." />
        <CommandList>
          <CommandEmpty>Ничего не найдено.</CommandEmpty>
          <CommandGroup heading="Популярные сервисы">
            <CommandItem
              key={"playstation_popular"}
              value={"playstation_popular"}
              onSelect={() => {
                runCommand(() => router.push("playstation"));
              }}
            >
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Playstation</span>
            </CommandItem>
            <CommandItem
              key={"spotify_popular"}
              value={"spotify_popular"}
              onSelect={() => {
                runCommand(() => router.push("spotify"));
              }}
            >
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Spotify</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Все сервисы">
            {services.map((service) => (
              <CommandItem
                keywords={service.keywords}
                key={service.name}
                value={service.value}
                onSelect={() => {
                  runCommand(() => router.push(service.value));
                }}
              >
                <span>{service.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
