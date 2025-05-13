"use client";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigation from "../misc/carouselButtons";
import Heading from "../misc/heading";
import Card from "../misc/card";
import Image from "next/image";

import nike from "../../../../public/HomePage/Shoponlinewithyourboost/Nike.png";
import ebay from "../../../../public/HomePage/Shoponlinewithyourboost/ebay.png";
import walmart from "../../../../public/HomePage/Shoponlinewithyourboost/Walmart.png";
import noon from "../../../../public/HomePage/Shoponlinewithyourboost/Noon.png";
import iherb from "../../../../public/HomePage/Shoponlinewithyourboost/iHerb.png";
import cashBackicon from "../../../../public/HomePage/Shoponlinewithyourboost/Cashback icon.png";

const storeData = [
  {
    id: 1,
    image: nike,
    labelText: "Nike",
    discription: "15% cashback",
  },
  {
    id: 2,
    image: ebay,
    labelText: "eBay",
    discription: "up to 12% cashback",
  },
  {
    id: 3,
    image: walmart,
    labelText: "Walmart",
    discription: "25% cashback",
  },
  {
    id: 4,
    image: noon,
    labelText: "Noon",
    discription: "5% cashback",
  },
  {
    id: 5,
    image: iherb,
    labelText: "iHerb",
    discription: "26% cashback",
  },
  {
    id: 6,
    image: nike,
    labelText: "Nike",
    discription: "15% cashback",
  },
  {
    id: 7,
    image: ebay,
    labelText: "eBay",
    discription: "up to 12% cashback",
  },
  {
    id: 8,
    image: walmart,
    labelText: "Walmart",
    discription: "25% cashback",
  },
  {
    id: 9,
    image: noon,
    labelText: "Noon",
    discription: "5% cashback",
  },
  {
    id: 10,
    image: iherb,
    labelText: "iHerb",
    discription: "26% cashback",
  },
];

export default function AffiliateStores() {
  // Initialize Embla Carousel for the first list and get the API
  const [emblaRefOffers, emblaApiOffers] = useEmblaCarousel({
    loop: false,
  }); // Get the API

  const handleViewAllClick = () => {
    alert("View All clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      <div className="flex justify-between items-center mb-1 md:mb-4">
        <Heading
          subheading="Earn cashback and spend at your favourites"
          className="mb-0"
        >
          Shop online with your boost
        </Heading>
        <CarouselNavigation
          emblaApi={emblaApiOffers} // Pass the API instance
          onViewAllClick={handleViewAllClick} // Pass the click handler
        />
      </div>

      <div className="embla mt-2" ref={emblaRefOffers}>
        <div className="embla__container_store">
          {storeData.map((store) => (
            <div className="embla__slide--stores-card" key={store.id}>
              <Card key={store.id} image={store.image}>
                <div className={`flex flex-col text-[#010101] `}>
                  <span className="font-semibold text-2xl ">
                    {store.labelText}
                  </span>
                  <div className="flex items-center gap-1">
                    <Image
                      src={cashBackicon}
                      width={16}
                      height={16}
                      alt="badge"
                    />
                    <span className="text-base font-normal ">
                      {store.discription}
                    </span>
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
