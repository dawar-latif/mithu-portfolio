"use client";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigation from "../misc/carouselButtons";
import Button from "../misc/button";
import Heading from "../misc/heading";
import PosterCard from "../misc/posterCard";
import Image from "next/image";

import seller1 from "../../../../public/HomePage/UnmissableOffers/Images/image.png";
import seller2 from "../../../../public/HomePage/UnmissableOffers/Images/image-1.png";
import seller3 from "../../../../public/HomePage/UnmissableOffers/Images/image-2.png";
import seller4 from "../../../../public/HomePage/UnmissableOffers/Images/image-3.png";

import sellerlogo1 from "../../../../public/HomePage/BestSellers/Logos/image.png";
import sellerlogo2 from "../../../../public/HomePage/BestSellers/Logos/image 950.png";
import sellerlogo3 from "../../../../public/HomePage/BestSellers/Logos/image 951.png";
import sellerlogo4 from "../../../../public/HomePage/BestSellers/Logos/image 952.png";

const unmissableOffers = [
  {
    id: 1,
    image: seller1, // Replace with actual image path
    logo: sellerlogo1, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Al Maqabir",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 2,
    image: seller2, // Replace with actual image path
    logo: sellerlogo2, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Zad Al Arab",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 3,
    image: seller3, // Replace with actual image path
    logo: sellerlogo3, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Al Tazal",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 4,
    image: seller4, // Replace with actual image path
    logo: sellerlogo4, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Half Million",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 5,
    image: seller1, // Replace with actual image path
    logo: sellerlogo1, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Al Maqabir",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 6,
    image: seller2, // Replace with actual image path
    logo: sellerlogo2, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Zad Al Arab",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 7,
    image: seller3, // Replace with actual image path
    logo: sellerlogo3, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Al Tazal",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  {
    id: 8,
    image: seller4, // Replace with actual image path
    logo: sellerlogo4, // Replace with actual logo path
    title: "Flash Sale! Dinner Buffet at Half Million",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29 %",
  },
  // Add more offers as needed
];

export default function UnmissableOffers() {
  // Initialize Embla Carousel for the first list and get the API
  const [emblaRefOffers, emblaApiOffers] = useEmblaCarousel({
    loop: true,
  }); // Get the API

  const handleViewAllClick = () => {
    alert("View All clicked!");
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      {/* Container for Heading, View All, and Navigation Buttons */}
      <div className="flex justify-between items-center mb-1 md:mb-4">
        <Heading className="mb-0">Unmissable Offers</Heading>
        <CarouselNavigation
          emblaApi={emblaApiOffers} // Pass the API instance
          onViewAllClick={handleViewAllClick} // Pass the click handler
        />
      </div>

      <div className="embla mt-2" ref={emblaRefOffers}>
        <div className="embla__container">
          {unmissableOffers.map((offer) => (
            <div className="embla__slide--offers-card" key={offer.id}>
              <PosterCard key={offer.id} image={offer.image}>
                <div
                  className={`flex flex-col text-white justify-between h-full`}
                >
                  <Image src={offer.logo} alt="..." />
                  <div className={`flex flex-col`}>
                    <span className="font-semibold text-xl md:text-2xl ">
                      {offer.title}
                    </span>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-1 ">
                        <span className="text-base font-semibold ">SAR</span>
                        <span className="text-base font-semibold ">
                          {offer.discountedPrice}
                        </span>
                        <span className="text-base font-semibold text-[#888] line-through">
                          {offer.originalPrice}
                        </span>
                      </div>
                      <Button
                        onClick={handleButtonClick}
                        className="py-[4px] "
                        variant="secondary"
                      >
                        {offer.saveText}
                      </Button>
                    </div>
                  </div>
                </div>
              </PosterCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
