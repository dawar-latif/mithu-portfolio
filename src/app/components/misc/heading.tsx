import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  subheading?: React.ReactNode;
  className?: string; // Added optional className prop for the main div
}

export default function Heading({
  children,
  subheading,
  className = "",
}: HeadingProps) {
  // Destructure className and provide a default empty string
  return (
    // Apply the className prop along with any existing classes
    <div className={`gap-1 sm:gap-2 md:gap-4 ${className}`}>
      <h1 className="text-base md:text-xl lg:text-2xl font-bold text-black pb-1 font-manrope">
        {children}
      </h1>
      {subheading && (
        <div className="text-xs md:text-sm lg:text-base font-medium text-[#2E2C36] pb-1">
          {subheading}
        </div>
      )}
    </div>
  );
}
