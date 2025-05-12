"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image"; // Import Next.js Image component

// Assuming these imports are correct relative to this component's location
import nextIcon from "../../../../public/HomePage/Next Icon.svg";
import previousIcon from "../../../../public/HomePage/Previous Icon.svg";

// Define the props for the component
interface CarouselNavigationProps {
  emblaApi: any | undefined; // The Embla API instance (can be undefined initially)
  onViewAllClick?: () => void; // Optional click handler for View All
  viewAllHref?: string; // Optional href for View All (if it's a link)
  // You could add props for icon sources if they aren't always the same
  // nextIconSrc?: string;
  // previousIconSrc?: string;
}

function CarouselNavigation({
  emblaApi,
  onViewAllClick,
  viewAllHref,
}: // Use imported icons by default
// nextIconSrc = nextIcon,
// previousIconSrc = previousIcon,
CarouselNavigationProps) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Function to update button states, uses the passed emblaApi
  const updateButtonStates = useCallback((emblaApi: any | undefined) => {
    if (!emblaApi) return; // Ensure API exists before calling methods
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  // Effect to subscribe to Embla API events using the passed emblaApi
  useEffect(() => {
    if (!emblaApi) return;

    // Update state on init and whenever the carousel scrolls
    emblaApi.on("init", updateButtonStates);
    emblaApi.on("select", updateButtonStates);
    // Initial state check
    updateButtonStates(emblaApi);

    // Cleanup event listeners
    return () => {
      emblaApi.off("select", updateButtonStates);
      emblaApi.off("init", updateButtonStates);
    };
  }, [emblaApi, updateButtonStates]); // Dependency array includes emblaApi

  // Determine if View All should be a button or a link
  const ViewAllElement = viewAllHref ? "a" : "button";

  const viewAllProps = viewAllHref
    ? { href: viewAllHref } // Link props (consider adding target="_blank" rel="noopener noreferrer")
    : { onClick: onViewAllClick, type: "button" as const }; // Button props

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {" "}
      {/* Container for View All and Icons */}
      {/* View All Link/Button */}
      {(onViewAllClick || viewAllHref) && ( // Only render if a handler or href is provided
        <ViewAllElement
          {...viewAllProps}
          className="text-[#B218B7] hover:underline text-sm sm:text-base md:text-lg font-semibold bg-transparent border-none cursor-pointer p-0" // Tailwind classes for styling as a link
        >
          View&nbsp;all&nbsp;&gt;
        </ViewAllElement>
      )}
      {/* Navigation Buttons */}
      <button
        className="embla__button embla__button--prev disabled:opacity-50 disabled:cursor-not-allowed rounded-full border-none cursor-pointer" // Example Tailwind classes
        onClick={() => emblaApi?.scrollPrev()} // Use optional chaining in case api is null/undefined
        disabled={!canScrollPrev}
      >
        {/* Use Image component for icons */}
        <Image
          src={previousIcon}
          alt="Previous"
          className="size-4 md:size-8" // Use Tailwind size utility
          width={32} // Provide explicit width/height for Image component
          height={32}
        />
      </button>
      <button
        className="embla__button embla__button--next disabled:opacity-50 disabled:cursor-not-allowed rounded-full border-none cursor-pointer" // Example Tailwind classes
        onClick={() => emblaApi?.scrollNext()} // Use optional chaining
        disabled={!canScrollNext}
      >
        {/* Use Image component for icons */}
        <Image
          src={nextIcon}
          alt="Next"
          className="size-4 md:size-8" // Use Tailwind size utility
          width={32} // Provide explicit width/height for Image component
          height={32}
        />
      </button>
    </div>
  );
}

export default CarouselNavigation;
