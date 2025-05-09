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
    <div className={`gap-1 sm:gap-2 md:gap-4 mb-2 ${className}`}>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-black pb-1 font-manrope">
        {children}
      </h1>
      {subheading && (
        <div className="text-sm md:text-base lg:text-xl font-medium text-[#888] ">
          {subheading}
        </div>
      )}
    </div>
  );
}
