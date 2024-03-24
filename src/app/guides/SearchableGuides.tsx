"use client";

import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";

type Props = {
  instructions: {
    name: string;
    url: string;
    tags: string[];
  }[];
};

function SearchableGuides({ instructions }: Props) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <p className="mt-4 mb-1">Что вы хотите найти?</p>
      <TextInput
        className="input input-bordered w-full max-w-xs"
        value={searchInput}
        onChange={(ev) => setSearchInput(ev.currentTarget.value)}
        placeholder="Поиск..."
        type="text"
      />
      <div className="flex flex-wrap gap-4 my-4">
        {instructions.map((item) => {
          if (
            item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.tags.flat().join(" ").toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return (
              <a className="p-3 lg:text-lg rounded-lg bg-secondary text-white font-medium" key={item.url} href={item.url}>
                <p>{item.name}</p>
              </a>
            );
          }
        })}
      </div>
    </>
  );
}

export default SearchableGuides;
