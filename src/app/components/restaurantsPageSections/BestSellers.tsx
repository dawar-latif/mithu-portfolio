"use client";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigation from "../misc/carouselButtons";
import Card from "../misc/card";
import Heading from "../misc/heading";
import Button from "../misc/button";

import seller1 from "../../../../public/HomePage/BestSellers/Images/image.png";
import seller2 from "../../../../public/HomePage/BestSellers/Images/image-1.png";
import seller3 from "../../../../public/HomePage/BestSellers/Images/image-2.png";
import seller4 from "../../../../public/HomePage/BestSellers/Images/image-3.png";

import sellerlogo2 from "../../../../public/HomePage/BestSellers/Logos/image.png";
import sellerlogo3 from "../../../../public/HomePage/BestSellers/Logos/image 950.png";
import sellerlogo4 from "../../../../public/HomePage/BestSellers/Logos/image 951.png";
import sellerlogo5 from "../../../../public/HomePage/BestSellers/Logos/image 952.png";
import Image from "next/image";

const bestSellers = [
  {
    id: 1,
    image: seller1,
    logo: sellerlogo2,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 2,
    image: seller2,
    logo: sellerlogo3,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 3,
    image: seller3,
    logo: sellerlogo4,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 4,
    image: seller4,
    logo: sellerlogo5,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 5,
    image: seller1,
    logo: sellerlogo2,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 6,
    image: seller2,
    logo: sellerlogo3,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 7,
    image: seller3,
    logo: sellerlogo4,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
  {
    id: 8,
    image: seller4,
    logo: sellerlogo5,
    location: "Multiple Locations",
    dealTitle: "Saudi Meals @ SaudiDay",
    description: "1-Night weekend stay with breakfast",
    originalPrice: 79,
    discountedPrice: 48,
    saveText: "Save 29%",
  },
];

export default function BestSellers() {
  // Initialize Embla Carousel for the first list and get the API
  const [emblaRefOffers, emblaApiOffers] = useEmblaCarousel({
    loop: true,
  }); // Get the API
  const handleViewAllClick = () => {
    alert("Button clicked!");
  };
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-16 px-2 md:px-10 lg:px-32 bg-black">
      <div className="flex justify-between items-center mb-1 md:mb-4">
        <Heading
          className="mb-0 "
          subheading="Check out the very best and most popular Mithu deals and offers here"
          titleColor="text-white"
          subheadingColor="text-white"
        >
          Best Sellers
        </Heading>
        {/* <CarouselNavigation
          emblaApi={emblaApiOffers} // Pass the API instance
          onViewAllClick={handleViewAllClick} // Pass the click handler
          viewAllTextColor="text-white"
          iconButtonColorClass="border-[1px] border-gray-50"
        /> */}
      </div>

      <div className="embla mt-2 " ref={emblaRefOffers}>
        <div className="embla__container_store">
          {bestSellers.map((seller) => (
            <div className="embla__slide--sellers-card " key={seller.id}>
              <Card
                key={seller.id}
                image={seller.image}
                logo={seller.logo}
                className="bg-white"
              >
                <div className={`flex flex-col text-[#010101] `}>
                  <span className="font-normal text-base text-[#888] ">
                    {seller.location}
                  </span>
                  <span className="font-semibold text-xl md:text-2xl ">
                    {seller.dealTitle}
                  </span>
                  <span className="text-base font-semibold ">
                    {seller.description}
                  </span>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-1 ">
                      <span className="text-base font-semibold ">SAR</span>
                      <span className="text-base font-semibold ">
                        {seller.discountedPrice}
                      </span>
                      <span className="text-base font-semibold text-[#888] line-through">
                        {seller.originalPrice}
                      </span>
                    </div>
                    <Button onClick={handleButtonClick} className="py-[4px] ">
                      {seller.saveText}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
