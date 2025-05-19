"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import starIcon from "../../../../../public/RestaurantPage/OneRestaurant/1 Cover Assets/Star 1.png";
import Button from "../../misc/button";

interface SliderCardProps {
  image: string | StaticImageData; // Main background image
  logo: string | StaticImageData; // Restaurant logo
  title: string; // Restaurant name
  discription: string; // Combined distance and cuisine, or a description text
  type?: string; // Optional type prop (not visible in the image, but requested)
  rating?: number; // Optional rating, as seen in the image
  pointsBack?: string; // Optional points back text, as seen in the image
}

export default function SliderCard({
  image,
  logo,
  title,
  discription,
  type,
  rating,
}: SliderCardProps) {
  const backgroundImageUrl = typeof image === "string" ? image : image?.src;

  return (
    <div
      className={`flex flex-col w-full relative `}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url('${backgroundImageUrl}')`
          : "none", // Use background image from prop
        backgroundSize: "cover", // Cover the entire div
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Do not repeat the image
        minHeight: "350px", // Example minimum height, adjust as needed
        justifyContent: "end",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-24 z-0 rounded-xl"></div>
      <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col text-white h-full rounded-xl px-2 md:px-10 lg:px-32 ">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1 md:gap-2 ">
            <Image
              src={logo}
              alt="badge"
              className="rounded-md"
              width={56}
              height={40}
            />
            <div className="flex flex-col gap-[2px]">
              <span className="text-base md:text-xl font-semibold ">
                {title}
              </span>
              <span className="text:sm md:text-base font-normal">
                {discription}
              </span>
              <span className="text:sm md:text-base font-normal ">{type}</span>
            </div>
          </div>
          <Button
            className="py-[4px] px-[16px] gap-[2px] self-end"
            variant="secondary"
          >
            <Image
              src={starIcon}
              alt="rating"
              className="size-[16px]"
              width={4}
              height={4}
            />
            <span className="">{rating}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
