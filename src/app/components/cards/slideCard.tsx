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
      className={`w-full rounded-3xl p-4 md:p-8 lg:p-16 ${bgColor} lg:flex justify-center items-center ${titleColor} `}
    >
      <div className="flex flex-col lg:w-5/12 justify-center items-center lg:items-start text-center lg:text-start gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-3 lg:mb-0">
        <p className="text-2xl md:text-4xl lg:text-6xl font-bold ">{title}</p>
        <p className="text-xs md:text-lg lg:text-xl font-normal">
          {description}
        </p>
        <button
          className={`${buttonBgColor} ${buttonTextColor} rounded-md px-2 md:px-4 lg:px-6 py-1 md:py-2 text-sm md:text-2xl cursor-pointer`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <Image
        src={logo ?? ""}
        alt="logo"
        className="lg:w-7/12"
        width={500}
        height={300}
      />
    </div>
  );
}
