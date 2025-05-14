"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigation from "../misc/carouselButtons";
import Heading from "../misc/heading";
import CategoriesCard from "../cards/categoriesCard";
import BasicCategoriesCard from "../cards/basicCategoriesCard";

import restaurantsIcon from "../../../../public/HomePage/CategoryIcons/Categories/Restaurants.svg";
import coffeeSweetsIcon from "../../../../public/HomePage/CategoryIcons/Categories/Coffee & Sweets.svg";
import superMarketIcon from "../../../../public/HomePage/CategoryIcons/Categories/Super Market.svg";
import onlineShoppingIcon from "../../../../public/HomePage/CategoryIcons/Categories/Online Shopping.svg";

import juice from "../../../../public/RestaurantPage/foodcategories/juice.png";
import coffee from "../../../../public/RestaurantPage/foodcategories/coffee.png";
import chineese from "../../../../public/RestaurantPage/foodcategories/chinease.png";
import desserts from "../../../../public/RestaurantPage/foodcategories/desserts.png";
import pizza from "../../../../public/RestaurantPage/foodcategories/pizza.png";
import burger from "../../../../public/RestaurantPage/foodcategories/burger.png";
import breakfast from "../../../../public/RestaurantPage/foodcategories/breakfast.png";

const basicCategoriesData = [
  {
    id: 1,
    image: pizza,
    labelText: "Pizza",
  },
  {
    id: 2,
    image: burger,
    labelText: "Burger",
  },
  {
    id: 3,
    image: coffee,
    labelText: "Coffe & Tea",
  },
  {
    id: 4,
    image: chineese,
    labelText: "Chinese",
  },
  {
    id: 5,
    image: juice,
    labelText: "Juice",
  },
  {
    id: 6,
    image: desserts,
    labelText: "Desserts",
  },
  {
    id: 7,
    image: breakfast,
    labelText: "Breakfast",
  },
  {
    id: 8,
    image: pizza,
    labelText: "Pizza",
  },
  {
    id: 9,
    image: burger,
    labelText: "Burger",
  },
  {
    id: 10,
    image: coffee,
    labelText: "Coffe & Tea",
  },
  {
    id: 11,
    image: chineese,
    labelText: "Chinese",
  },
  {
    id: 12,
    image: juice,
    labelText: "Juice",
  },
  {
    id: 13,
    image: desserts,
    labelText: "Desserts",
  },
  {
    id: 14,
    image: breakfast,
    labelText: "Breakfast",
  },
];

export default function Categories() {
  const [emblaRefBasicCategories] = useEmblaCarousel({ loop: true });

  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      {/* Second Carousel Section */}
      <div className="embla " ref={emblaRefBasicCategories}>
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
