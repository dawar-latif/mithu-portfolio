"use client";
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

export default function BestSellers() {
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
  ];
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      <Heading subheading="Check out the very best and most popular Mithu deals and offers here">
        Best Sellers
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {bestSellers.map((seller) => (
          <Card key={seller.id} image={seller.image} logo={seller.logo}>
            <div className={`flex flex-col text-[#010101] `}>
              <span className="font-normal text-base text-[#888] ">
                {seller.location}
              </span>
              <span className="font-semibold text-2xl ">
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
        ))}
      </div>
    </section>
  );
}
