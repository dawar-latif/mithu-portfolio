import Image, { StaticImageData } from "next/image";
import React from "react";
import coin from "../../../../public/HomePage/TrendingRestaurants/Logos/Coins.svg";

interface CardProps {
  children: React.ReactNode;
  image?: string | StaticImageData;
  imageBadgeText?: string;
  logo?: string | StaticImageData;
  className?: string;
}

export default function Card({
  children,
  image,
  imageBadgeText,
  logo,
  className = "",
}: CardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl shadow-[0_0_10px_0_hsla(0,0%,0%,0.15)] w-full cursor-pointer p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 md:gap-4 ${className}`}
    >
      <div
        className={`flex justify-center items-center rounded-2xl overflow-hidden relative`}
      >
        {image && (
          <Image
            src={image}
            alt={"card main image"}
            className="w-full object-cover rounded-2xl"
          />
        )}
        {image && imageBadgeText && (
          <div className="bg-[#08AD04] max-w-[130px] h-[32px] flex justify-center gap-1 absolute top-5 left-0 rounded-tr-xl rounded-br-xl text-white text-base p-1">
            <Image
              src={coin}
              className="size-[20px] object-contain"
              alt="coin"
            />
            {imageBadgeText}
          </div>
        )}
        {logo && (
          <Image
            src={logo}
            alt={"card logo"}
            className="object-contain size-16 absolute bottom-3 right-3"
          />
        )}
      </div>
      {children}
    </div>
  );
}
