import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  subheading?: React.ReactNode;
  className?: string;
  titleColor?: string; // New optional prop for title color
  subheadingColor?: string; // New optional prop for subheading color
}

export default function Heading({
  children,
  subheading,
  className = "",
  titleColor = "text-black", // Default title color
  subheadingColor = "text-[#2E2C36]", // Default subheading color
}: HeadingProps) {
  return (
    <div className={`gap-1 sm:gap-2 md:gap-4 ${className}`}>
      <h1
        className={`text-base md:text-xl lg:text-2xl font-bold pb-1 font-manrope ${titleColor}`}
      >
        {children}
      </h1>
      {subheading && (
        <div
          className={`text-xs md:text-sm lg:text-base font-medium pb-1 ${subheadingColor}`}
        >
          {subheading}
        </div>
      )}
    </div>
  );
}