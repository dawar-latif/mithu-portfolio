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
];

export default function AffiliateStores() {
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      <Heading subheading="Rack up cashback and spend at your favourites">
        Shop online with your boost
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-2">
        {storeData.map((store) => (
          <Card key={store.id} image={store.image}>
            <div className={`flex flex-col text-[#010101] `}>
              <span className="font-semibold text-2xl ">{store.labelText}</span>
              <div className="flex items-center gap-1">
                <Image src={cashBackicon} width={16} height={16} alt="badge" />
                <span className="text-base font-normal ">
                  {store.discription}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
