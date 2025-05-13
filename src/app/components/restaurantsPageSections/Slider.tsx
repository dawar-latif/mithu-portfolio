"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import sliderImage1 from "../../../../public/HomePage/Slider/Slider.png";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={sliderImage1} alt="..." />
        </div>
        {/* <div className="embla__slide">
          <Image src={sliderImage1} alt="..." />
        </div> */}
      </div>
    </div>
  );
}
