"use client";
import PosterCard from "../misc/posterCard";
import offer1 from "../../../../public/HomePage/PromotionalImage/image.png";
import offer2 from "../../../../public/HomePage/PromotionalImage/image-1.png";
import Button from "../misc/button";

const offers = [
  {
    id: 1,
    image: offer1,
    labelText: "We found the best, you save more!",
    discription: "Use code: MITHU40",
  },
  {
    id: 2,
    image: offer2,
    labelText: "Buy your desire food, Win amazing rewards",
    discription: "These amazing offers won’t last!",
  },
];

export default function Offers() {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
        {offers.map((offer) => (
          <PosterCard key={offer.id} image={offer.image}>
            <div className="flex flex-col justify-end h-full">
              <div className="flex justify-between items-center ">
                <div className={`flex flex-col `}>
                  <span className="font-semibold text-xl ">
                    {offer.labelText}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-normal ">
                      {offer.discription}
                    </span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  onClick={handleButtonClick}
                  className="mt-4"
                >
                  See&nbsp;More
                </Button>
              </div>
            </div>
          </PosterCard>
        ))}
      </div>
    </section>
  );
}
