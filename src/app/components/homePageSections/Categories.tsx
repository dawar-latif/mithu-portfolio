"use client";
import Heading from "../misc/heading";
import CategoriesCard from "../cards/categoriesCard";
import BasicCategoriesCard from "../cards/basicCategoriesCard";
import useEmblaCarousel from "embla-carousel-react";

import restaurantsIcon from "../../../../public/HomePage/CategoryIcons/Categories/Restaurants.svg";
import coffeeSweetsIcon from "../../../../public/HomePage/CategoryIcons/Categories/Coffee & Sweets.svg";
import superMarketIcon from "../../../../public/HomePage/CategoryIcons/Categories/Super Market.svg";
import onlineShoppingIcon from "../../../../public/HomePage/CategoryIcons/Categories/Online Shopping.svg";

import games from "../../../../public/HomePage/CategoryIcons/Categories 1/Games.png";
import laundary from "../../../../public/HomePage/CategoryIcons/Categories 1/Laundry.png";
import travel from "../../../../public/HomePage/CategoryIcons/Categories 1/Mithu Travels.png";
import nfts from "../../../../public/HomePage/CategoryIcons/Categories 1/NFTs.png";
import pharmacy from "../../../../public/HomePage/CategoryIcons/Categories 1/Pharmacy.png";
import saloon from "../../../../public/HomePage/CategoryIcons/Categories 1/Saloon & Spas.png";
import nextIcon from "../../../../public/HomePage/Next Icon.svg";
import previousIcon from "../../../../public/HomePage/Previous Icon.svg";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const categoriesData = [
  {
    id: 1,
    image: restaurantsIcon,
    bgMain: "bg-green-400",
    bgLight: "bg-green-100",
    labelText: "Restaurants",
  },
  {
    id: 2,
    image: coffeeSweetsIcon,
    bgMain: "bg-orange-400",
    bgLight: "bg-orange-100",
    labelText: "Coffee & Sweets",
  },
  {
    id: 3,
    image: superMarketIcon,
    bgMain: "bg-sky-400",
    bgLight: "bg-sky-100",
    labelText: "Super Market",
  },
  {
    id: 4,
    image: onlineShoppingIcon,
    bgMain: "bg-rose-400",
    bgLight: "bg-rose-100",
    labelText: "Online Shopping",
  },
  {
    id: 5,
    image: restaurantsIcon,
    bgMain: "bg-green-400",
    bgLight: "bg-green-100",
    labelText: "Restaurants",
  },
  {
    id: 6,
    image: coffeeSweetsIcon,
    bgMain: "bg-orange-400",
    bgLight: "bg-orange-100",
    labelText: "Coffee & Sweets",
  },
  {
    id: 7,
    image: superMarketIcon,
    bgMain: "bg-blue-400",
    bgLight: "bg-blue-100",
    labelText: "Super Market",
  },
  {
    id: 8,
    image: onlineShoppingIcon,
    bgMain: "bg-pink-400",
    bgLight: "bg-pink-100",
    labelText: "Online Shopping",
  },
];
const basicCategoriesData = [
  {
    id: 1,
    image: pharmacy,
    labelText: "Pharmacy",
  },
  {
    id: 2,
    image: saloon,
    labelText: "Saloon & Spa’s",
  },
  {
    id: 3,
    image: laundary,
    labelText: "Laundry",
  },
  {
    id: 4,
    image: travel,
    labelText: "Mithu Travels",
  },
  {
    id: 5,
    image: games,
    labelText: "Games",
  },
  {
    id: 6,
    image: nfts,
    labelText: "NFT’s",
  },
  {
    id: 7,
    image: pharmacy,
    labelText: "Pharmacy",
  },
  {
    id: 8,
    image: saloon,
    labelText: "Saloon & Spa’s",
  },
  {
    id: 9,
    image: laundary,
    labelText: "Laundry",
  },
  {
    id: 10,
    image: travel,
    labelText: "Mithu Travels",
  },
  {
    id: 11,
    image: games,
    labelText: "Games",
  },
  {
    id: 12,
    image: nfts,
    labelText: "NFT’s",
  },
];

export default function Categories() {
  // Initialize Embla Carousel for the first list and get the API
  const [emblaRefCategories, emblaApiCategories] = useEmblaCarousel({
    loop: false,
  }); // Get the API

  // Initialize Embla Carousel for the second list
  const [emblaRefBasicCategories] = useEmblaCarousel({ loop: false });

  // State for navigation button visibility/state
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Function to update button states
  // Added EmblaCarouselType annotation
  const updateButtonStates = useCallback((emblaApi: any) => {
    if (!emblaApi) return; // Good practice
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  // Effect to subscribe to Embla API events
  useEffect(() => {
    if (!emblaApiCategories) return;

    // Update state on init and whenever the carousel scrolls
    emblaApiCategories.on("init", updateButtonStates);
    emblaApiCategories.on("select", updateButtonStates);
    // Initial state check
    updateButtonStates(emblaApiCategories);

    // Cleanup event listeners
    return () => {
      emblaApiCategories.off("select", updateButtonStates);
      emblaApiCategories.off("init", updateButtonStates); // Clean up init listener too
    };
  }, [emblaApiCategories, updateButtonStates]);

  // Handler for the "View all" click
  const handleViewAllClick = () => {
    alert("View All clicked!");
    // In a real app, you would typically navigate here:
    // router.push('/categories');
  };

  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      {/* First Carousel Section */}
      {/* Container for Heading, View All, and Navigation Buttons */}
      <div className="flex justify-between items-center mb-4">
        <Heading>Categories</Heading>
        <div className="flex items-center gap-4">
          {/* View All Link/Button */}
          <button
            onClick={handleViewAllClick}
            className="text-blue-600 hover:underline text-base md:text-lg bg-transparent border-none cursor-pointer p-0" // Tailwind classes for styling as a link
          >
            View all &gt;
          </button>

          {/* Navigation Buttons */}
          <button
            className="embla__button embla__button--prev disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-full border border-gray-300" // Example Tailwind classes
            onClick={() => emblaApiCategories?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <Image src={previousIcon} alt="Previous" width={24} height={24} />
          </button>
          <button
            className="embla__button embla__button--next disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-full border border-gray-300" // Example Tailwind classes
            onClick={() => emblaApiCategories?.scrollNext()}
            disabled={!canScrollNext}
          >
            <Image src={nextIcon} alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
      {/* Embla Carousel Container for Categories */}
      <div className="embla mt-2" ref={emblaRefCategories}>
        <div className="embla__container">
          {categoriesData.map((category) => (
            <div className="embla__slide--categories-card" key={category.id}>
              <CategoriesCard
                image={category.image}
                bgMain={category.bgMain}
                bgLight={category.bgLight}
                labelText={category.labelText}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Second Carousel Section */}
      <div className="embla mt-8" ref={emblaRefBasicCategories}>
        <div className="embla__container">
          {basicCategoriesData.map((category) => (
            <div className="embla__slide--basic-card" key={category.id}>
              <BasicCategoriesCard
                image={category.image}
                labelText={category.labelText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
