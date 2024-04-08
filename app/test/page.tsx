"use client";
import type { ChangeEvent } from "react";
import { useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

const items = [
  "Go to school",
  "Do homework",
  "Read a book",
  "Go to bed",
  "Go shopping",
  "Write a letter",
  "Make a coffee",
];

export default function TestPage() {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = useDebounce((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  });

  const displayedItems = items.filter((item) => item.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div className="mx-auto max-w-2xl p-6">
      <input
        className="mb-8 h-12 w-full rounded-md border border-solid px-4 outline-none"
        onChange={handleInputChange}
      />
      {displayedItems.map((item) => (
        <div key={item} className="mb-3 w-full rounded border border-solid p-2 shadow">
          {item}
        </div>
      ))}
    </div>
  );
}
