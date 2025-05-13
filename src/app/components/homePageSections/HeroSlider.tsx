"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import sliderImage1 from "../../../../public/HomePage/Slider/Slider.png";
import logo from "../../../../public/HomePage/Slider/Slide Content.png";
import coverImage from "../../../../public/HomePage/Slider/Slider Image.png";

const slides = [
  {
    id: 1,
    logo: logo,
    coverImage: coverImage,
    title: "Buy, Earn, Redeem!",
    discription:
      "Dive into unbeatable Restaurant & Store Access Offers in KSA with Mithu",
  },
  {
    id: 2,
    logo: logo,
    coverImage: coverImage,
    title: "Buy, Earn, Redeem!",
    discription:
      "Dive into unbeatable Restaurant & Store Access Offers in KSA with Mithu",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide) => (
          <div
            className="embla__slide bg-gradient-to-r from-[#000000] to-[#103C16]"
            key={slide.id}
          >
            <div className="px-6 md:px-10 lg:px-32 pt-4 md:pt-6">
              <div className=" md:flex justify-center items-center text-white ">
                <div className="flex flex-col md:w-6/12 justify-center items-center md:items-start text-center md:text-start gap-1 md:gap2 lg:gap-4">
                  <Image
                    src={slide.logo ?? ""}
                    className="w-[150px] md:w-[180px] lg:w-[250px]"
                    alt="logo"
                  />
                  <p className="text-2xl md:text-4xl lg:text-6xl font-bold ">
                    {slide.title}
                  </p>
                  <p className="text-lg md:text-xl lg:text-4xl font-normal">
                    {slide.discription}
                  </p>
                </div>
                <Image
                  src={slide.coverImage ?? ""}
                  alt="logo"
                  className=" md:w-6/12"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
