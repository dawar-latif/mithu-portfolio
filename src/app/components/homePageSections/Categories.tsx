"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "../misc/heading";
import CategoriesCard from "../cards/categoriesCard";
import BasicCategoriesCard from "../cards/basicCategoriesCard";

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
import CarouselNavigation from "../misc/carouselButtons";

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
    loop: true,
  }); // Get the API

  // Initialize Embla Carousel for the second list
  const [emblaRefBasicCategories] = useEmblaCarousel({ loop: true });

  const handleViewAllClick = () => {
    alert("View All clicked!");
  };

  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      {/* Container for Heading, View All, and Navigation Buttons */}
      <Heading className="mb-0">Categories</Heading>
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
      <div className="embla mt-6" ref={emblaRefBasicCategories}>
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
