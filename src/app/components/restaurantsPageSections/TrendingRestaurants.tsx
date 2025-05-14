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

const filterOptions = [
  { id: 1, label: "Pay with Coins", icon: "<svg ...>...</svg>" },
  { id: 2, label: "For You", icon: "<svg ...>...</svg>" },
  { id: 3, label: "Popular", icon: "<svg ...>...</svg>" },
  { id: 4, label: "Open Now", icon: "<svg ...>...</svg>" },
  { id: 5, label: "New on Mithu", icon: "<svg ...>...</svg>" },
  // Add more filter options as needed
];

export default function TrendingRestaurants() {
  // Initialize Embla Carousel for the first list and get the API
  const [emblaRefOffers, emblaApiOffers] = useEmblaCarousel({
    loop: false,
  });

  const handleFilterClick = (filterId: number) => {
    console.log(`Filter ${filterId} clicked`);
    // Implement filter logic here
  };

  const handleSortClick = () => {
    console.log("Sort button clicked");
    // Implement sort logic (e.g., open dropdown)
  };

  const handleViewMapClick = () => {
    console.log("View Map button clicked");
    // Implement view map logic (e.g., navigate to map page or show map modal)
  };

  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-16 lg:py-32">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black pb-1 font-manrope ">
        Restaurants in Riyadh, KSA
      </h1>

      <div className="flex flex-wrap items-center gap-2  py-4">
        <button className="flex-shrink-0 p-2 rounded-full border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              className="flex-shrink-0 flex items-center gap-1 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.label === "New on Mithu" && (
                <span className="size-2 bg-green-500 rounded-full"></span>
              )}
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-1 md:mb-4">
        <Heading
          className="mb-0"
          subheading="We bring you the best value dining deals to let you experience the best!"
        >
          Dining / Restaurant
        </Heading>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
            onClick={handleSortClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h15.75m-15.75 0v9.75m0 9.75h15.75m-15.75 0v-9.75m0 0h9.75m-9.75 0c1.331 0 2.603.413 3.67 1.198M14.25 10.5c1.331 0 2.603.413 3.67 1.198M16.5 18.75h-2.25m2.25 0-.375.375M16.5 18.75 16.125 19.125"
              />
            </svg>
            Sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            onClick={handleViewMapClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.75-12H9v9l6-3 6 3V7.5c0-1.5-1.5-3-3-3h-.75Z"
              />
            </svg>
            Show Map
          </button>
        </div>
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
