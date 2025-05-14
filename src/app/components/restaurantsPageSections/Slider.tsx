"use client";
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

import logo from "../../../../public/RestaurantPage/slider/slider.jpg";
import SlideCard from "../cards/slideCard";

interface SlideData {
  id: number;
  logo: string | StaticImageData;
  title: string;
  titleColor: string;
  discription: string;
  bgColor: string;
  buttonText: string;
  buttonTextColor: string;
  buttonBgColor: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    logo: logo,
    title: "Fast Food",
    titleColor: "text-white",
    discription:
      "Dive into unbeatable Restaurant & Store Access Offers in KSA with Mithu",
    bgColor: "bg-red-600",
    buttonText: "READ MORE",
    buttonTextColor: "text-red-600",
    buttonBgColor: "bg-cyan-200",
  },
  {
    id: 2,
    logo: logo,
    title: "Fast Food",
    titleColor: "text-red-900",
    discription:
      "Explore exclusive offers and save on your favorite items and services.",
    bgColor: "bg-cyan-200",
    buttonText: "LEARN MORE",
    buttonTextColor: "text-white",
    buttonBgColor: "bg-red-600",
  },
];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  const handleButtonClick = (slideTitle: string) => {
    alert(`Button clicked for slide: ${slideTitle}`);
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container py-2 md:py-4 lg:py-8">
        {slides.map((slide) => (
          <div className="embla__slide--card" key={slide.id}>
            <SlideCard
              bgColor={slide.bgColor}
              titleColor={slide.titleColor}
              title={slide.title}
              description={slide.discription}
              buttonBgColor={slide.buttonBgColor}
              buttonTextColor={slide.buttonTextColor}
              buttonText={slide.buttonText}
              handleButtonClick={() => handleButtonClick(slide.title)}
              logo={slide.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}