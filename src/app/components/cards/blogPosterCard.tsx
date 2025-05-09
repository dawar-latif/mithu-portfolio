import Image, { StaticImageData } from "next/image";
import React from "react";

interface BlogPosterCardProps {
  children: React.ReactNode;
  image?: string | StaticImageData;
  className?: string;
  imageClassName?: string;
}

export default function BlogPosterCard({
  children,
  image,
  className = "",
  imageClassName = "",
}: BlogPosterCardProps) {
  return (
    <div className={`flex rounded-xl ${className}`}>
      <div
        className={`flex justify-center items-center w-1/2 ${imageClassName}`}
      >
        {image && (
          <Image
            src={image}
            alt={"cardImage"}
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>
      {children}
    </div>
  );
}
