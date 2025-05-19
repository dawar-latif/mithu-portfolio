"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import nextIcon from "../../../../public/HomePage/Next Icon.svg";
import nextIconWhite from "../../../../public/RestaurantPage/Iconss/Next Icon.svg";
import previousIcon from "../../../../public/HomePage/Previous Icon.svg";
import previousIconWhite from "../../../../public/RestaurantPage/Iconss/Previous Icon.svg"; // Corrected potential typo/source based on standard naming

interface CarouselNavigationProps {
  emblaApi: any | undefined;
  onViewAllClick?: () => void;
  viewAllHref?: string;
  variant?: "default" | "dark";
}

function CarouselNavigation({
  emblaApi,
  onViewAllClick,
  viewAllHref,
  variant = "default",
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

  const viewAllTextColorClass =
    variant === "dark" ? "text-white" : "text-[#B218B7]";
  const prevIconSrc = variant === "dark" ? previousIconWhite : previousIcon;
  const nextIconSrc = variant === "dark" ? nextIconWhite : nextIcon;

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {(onViewAllClick || viewAllHref) && (
        <ViewAllElement
          {...viewAllProps}
          className={`hover:underline text-sm sm:text-base md:text-lg font-semibold bg-transparent border-none cursor-pointer p-0 ${viewAllTextColorClass}`}
        >
          View&nbsp;all&nbsp;&gt;
        </ViewAllElement>
      )}

      <button
        className={`embla__button embla__button--prev disabled:opacity-50 disabled:cursor-not-allowed rounded-full cursor-pointer`}
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
      >
        <Image
          src={prevIconSrc}
          alt="Previous"
          className="size-4 md:size-8"
          width={32}
          height={32}
        />
      </button>
      <button
        className={`embla__button embla__button--next disabled:opacity-50 disabled:cursor-not-allowed rounded-full cursor-pointer`}
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
      >
        <Image
          src={nextIconSrc}
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