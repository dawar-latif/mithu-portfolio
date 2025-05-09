import Image, { StaticImageData } from "next/image";
import React from "react";

interface PosterCardProps {
  // Renamed interface to be more specific
  children: React.ReactNode;
  image?: string | StaticImageData;
  className?: string;
}

export default function PosterCard({
  children,
  image,
  className = "",
}: PosterCardProps) {
  const backgroundImageUrl = typeof image === "string" ? image : image?.src;

  return (
    <div
      className={`flex flex-col rounded-xl shadow-md w-full relative overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url('${backgroundImageUrl}')`
          : "none", // Use background image from prop
        backgroundSize: "cover", // Cover the entire div
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Do not repeat the image
        minHeight: "350px", // Example minimum height, adjust as needed
      }}
    >
      <div className="absolute inset-0 bg-black opacity-24 z-0"></div>
      <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col text-white h-full">
        {children}
      </div>
    </div>
  );
}
