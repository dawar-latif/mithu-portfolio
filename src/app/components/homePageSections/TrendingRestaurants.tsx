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

export default function TrendingRestaurants() {
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
    // Add more trending restaurants as needed
  ];
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-16 lg:py-32">
      <Heading subheading="Check out the very best and most popular Mithu deals and offers here">
        Trending Restaurants
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {trendingRestaurants.map((res) => (
          <Card key={res.id} image={res.image} imageBadgeText={res.pointsBack}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1 md:gap-2 text-black">
                <Image src={res.logo} alt="badge" className="rounded-xl " />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-base font-normal text-[#888]">
                    {res.distance}
                  </span>
                  <span className="text-xl font-semibold ">{res.name}</span>
                  <span className="text-base font-normal ">{res.cuisine}</span>
                </div>
              </div>
              <Button className="py-[4px] px-[12px] gap-[2px]">
                <Image src={star} alt="rating" className="size-[16px] " />
                <span className="">{res.rating}</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
