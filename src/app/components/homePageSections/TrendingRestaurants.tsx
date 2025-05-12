"use client";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigation from "../misc/carouselButtons";
import Heading from "../misc/heading";
import Card from "../misc/card";
import Image from "next/image";
import Button from "../misc/button";

import Restaurant1 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image.png";
import Restaurant2 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image-1.png";
import Restaurant3 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image-2.png";
import Restaurant4 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image-3.png";

import Restaurantlogo1 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos.png";
import Restaurantlogo2 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos-1.png";
import Restaurantlogo3 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos-2.png";
import Restaurantlogo4 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos-3.png";
import star from "../../../../public/HomePage/TrendingRestaurants/Logos/Star.svg";

const trendingRestaurants = [
  {
    id: 1,
    image: Restaurant1, // Replace with actual image path
    logo: Restaurantlogo1, // Replace with actual logo path
    pointsBack: "15 % points back",
    distance: "3.2 km away",
    rating: 5.0,
    name: "McDonald's",
    cuisine: "American Cusine",
  },
  {
    id: 2,
    image: Restaurant2, // Replace with actual image path
    logo: Restaurantlogo2, // Replace with actual logo path
    pointsBack: "20 % points back",
    distance: "3.8 km away",
    rating: 4.8,
    name: "Starbucks",
    cuisine: "Coffee House",
  },
  {
    id: 3,
    image: Restaurant3, // Replace with actual image path
    logo: Restaurantlogo3, // Replace with actual logo path
    pointsBack: "10 % points back",
    distance: "4.3 km away",
    rating: 4.7,
    name: "KFC",
    cuisine: "Fast Food House",
  },
  {
    id: 4,
    image: Restaurant4, // Replace with actual image path
    logo: Restaurantlogo4, // Replace with actual logo path
    pointsBack: "25 % points back",
    distance: "2.1 km away",
    rating: 3.9,
    name: "Burger King",
    cuisine: "Burger Speciality",
  },
  {
    id: 5,
    image: Restaurant1, // Replace with actual image path
    logo: Restaurantlogo1, // Replace with actual logo path
    pointsBack: "15 % points back",
    distance: "3.2 km away",
    rating: 5.0,
    name: "McDonald's",
    cuisine: "American Cusine",
  },
  {
    id: 6,
    image: Restaurant2, // Replace with actual image path
    logo: Restaurantlogo2, // Replace with actual logo path
    pointsBack: "20 % points back",
    distance: "3.8 km away",
    rating: 4.8,
    name: "Starbucks",
    cuisine: "Coffee House",
  },
  {
    id: 7,
    image: Restaurant3, // Replace with actual image path
    logo: Restaurantlogo3, // Replace with actual logo path
    pointsBack: "10 % points back",
    distance: "4.3 km away",
    rating: 4.7,
    name: "KFC",
    cuisine: "Fast Food House",
  },
  {
    id: 8,
    image: Restaurant4, // Replace with actual image path
    logo: Restaurantlogo4, // Replace with actual logo path
    pointsBack: "25 % points back",
    distance: "2.1 km away",
    rating: 3.9,
    name: "Burger King",
    cuisine: "Burger Speciality",
  },
  // Add more trending restaurants as needed
];

export default function TrendingRestaurants() {
  // Initialize Embla Carousel for the first list and get the API
  const [emblaRefOffers, emblaApiOffers] = useEmblaCarousel({
    loop: false,
  }); // Get the API
  const handleViewAllClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-16 lg:py-32">
      <div className="flex justify-between items-center mb-1 md:mb-4">
        <Heading className="mb-0">Trending Restaurants</Heading>
        <CarouselNavigation
          emblaApi={emblaApiOffers} // Pass the API instance
          onViewAllClick={handleViewAllClick} // Pass the click handler
        />
      </div>

      <div className="embla mt-2" ref={emblaRefOffers}>
        <div className="embla__container_store">
          {trendingRestaurants.map((res) => (
            <div className="embla__slide--sellers-card" key={res.id}>
              <Card
                key={res.id}
                image={res.image}
                imageBadgeText={res.pointsBack}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1 md:gap-2 text-black">
                    <Image src={res.logo} alt="badge" className="rounded-xl " />
                    <div className="flex flex-col gap-[2px]">
                      <span className="text:sm md:text-base font-normal text-[#888]">
                        {res.distance}
                      </span>
                      <span className="text-base md:text-xl font-semibold ">
                        {res.name}
                      </span>
                      <span className="text:sm md:text-base font-normal ">
                        {res.cuisine}
                      </span>
                    </div>
                  </div>
                  <Button className="py-[4px] px-[12px] gap-[2px]">
                    <Image src={star} alt="rating" className="size-[16px] " />
                    <span className="">{res.rating}</span>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
