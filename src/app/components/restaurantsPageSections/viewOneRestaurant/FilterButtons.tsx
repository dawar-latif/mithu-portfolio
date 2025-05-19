"use client";
import React, { useState } from "react";

interface FilterOption {
  id: number | string;
  label: string;
}

interface FilterButtonsProps {
  options: FilterOption[];
  onSelect: (filterId: number | string) => void;
}

export default function FilterButtons({
  options,
  onSelect,
}: FilterButtonsProps) {
  const [selectedFilterId, setSelectedFilterId] = useState<number | string>(
    options[0]?.id
  );

  const handleButtonClick = (filterId: number | string) => {
    setSelectedFilterId(filterId);
    onSelect(filterId);
  };

  return (
    <div className="flex flex-wrap gap-2 pb-2 md:pb-0">
      {options.map((filter) => (
        <button
          key={filter.id}
          className={`flex items-center gap-1 px-4 py-2 rounded-md border text-sm font-medium transition-colors cursor-pointer
             ${
               selectedFilterId === filter.id
                 ? "bg-black text-white"
                 : "border-gray-300 text-gray-700 hover:bg-gray-100"
             }`}
          onClick={() => handleButtonClick(filter.id)}
        >
          <span className="justify-center items-center">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
