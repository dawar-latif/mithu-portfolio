"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import nextIcon from "../../../../public/HomePage/Next Icon.svg";
import previousIcon from "../../../../public/HomePage/Previous Icon.svg";

interface CarouselNavigationProps {
  emblaApi: any | undefined;
  onViewAllClick?: () => void;
  viewAllHref?: string;
  viewAllTextColor?: string;
  iconButtonColorClass?: string;
}

function CarouselNavigation({
  emblaApi,
  onViewAllClick,
  viewAllHref,
  viewAllTextColor = "text-[#B218B7]",
  iconButtonColorClass = "text-black",
}: CarouselNavigationProps) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtonStates = useCallback((emblaApi: any | undefined) => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtonStates(emblaApi);
    emblaApi.on("init", updateButtonStates);
    emblaApi.on("select", updateButtonStates);

    return () => {
      emblaApi.off("select", updateButtonStates);
      emblaApi.off("init", updateButtonStates);
    };
  }, [emblaApi, updateButtonStates]);

  const ViewAllElement = viewAllHref ? "a" : "button";

  const viewAllProps = viewAllHref
    ? { href: viewAllHref }
    : { onClick: onViewAllClick, type: "button" as const };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {(onViewAllClick || viewAllHref) && (
        <ViewAllElement
          {...viewAllProps}
          className={`hover:underline text-sm sm:text-base md:text-lg font-semibold bg-transparent border-none cursor-pointer p-0 ${viewAllTextColor}`}
        >
          View&nbsp;all&nbsp;&gt;
        </ViewAllElement>
      )}

      <button
        className={`embla__button embla__button--prev disabled:opacity-50 disabled:cursor-not-allowed rounded-full  cursor-pointer ${iconButtonColorClass}`}
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
      >
        <Image
          src={previousIcon}
          alt="Previous"
          className="size-4 md:size-8"
          width={32}
          height={32}
        />
      </button>
      <button
        className={`embla__button embla__button--next disabled:opacity-50 disabled:cursor-not-allowed rounded-full  cursor-pointer ${iconButtonColorClass}`}
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
      >
        <Image
          src={nextIcon}
          alt="Next"
          className="size-4 md:size-8"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
}

export default CarouselNavigation;