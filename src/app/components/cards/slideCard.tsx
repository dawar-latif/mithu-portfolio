import Image, { StaticImageData } from "next/image";
import React from "react";

interface SlideCardProps {
  bgColor: string;
  titleColor?: string;
  title: string;
  description: string;
  buttonBgColor: string;
  buttonTextColor: string;
  buttonText: string;
  handleButtonClick: () => void;
  logo: string | StaticImageData;
}

export default function SlideCard({
  bgColor,
  titleColor = "text-white",
  title,
  description,
  buttonBgColor,
  buttonTextColor,
  buttonText,
  handleButtonClick,
  logo,
}: SlideCardProps) {
  return (
    <div
      className={`w-full rounded-3xl px-4 md:px-8 lg:px-16 py-2 md:py-4 lg:py-8 ${bgColor} lg:flex justify-center items-center ${titleColor} `}
    >
      <div className="flex flex-col lg:w-5/12 justify-center items-center lg:items-start text-center lg:text-start gap-1 md:gap-2 lg:gap-3 mb-2 md:mb-3 lg:mb-0">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold ">
          {title}
        </p>
        <p className="text-xs md:text-sm lg:text-base font-normal">
          {description}
        </p>
        <button
          className={`${buttonBgColor} ${buttonTextColor} rounded-md px-2 md:px-4 lg:px-6 py-1 md:py-2 text-xs sm:text-sm md:text-xl lg:text-2xl cursor-pointer`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <div className="lg:w-7/12">
        <Image
          src={logo ?? ""}
          alt="logo"
          className="w-full"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
