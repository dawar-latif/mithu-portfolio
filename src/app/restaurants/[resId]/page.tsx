"use client";
import SliderCard from "@/app/components/restaurantsPageSections/viewOneRestaurant/SliderCard";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import Restaurant1 from "../../../../public/RestaurantPage/OneRestaurant/1 Cover Assets/Cover Image.png";
import Restaurantlogo1 from "../../../../public/RestaurantPage/OneRestaurant/1 Cover Assets/Logo.png";
import Map from "@/app/components/misc/Map";
import FilterButtons from "@/app/components/restaurantsPageSections/viewOneRestaurant/FilterButtons";
import Heading from "@/app/components/misc/heading";
import Banner from "@/app/components/restaurantsPageSections/viewOneRestaurant/Banner";
import AdSpot from "@/app/components/restaurantsPageSections/viewOneRestaurant/AdSpot";

const exampleRestaurantData = {
  id: 1,
  image: Restaurant1, // Use imported image
  logo: Restaurantlogo1, // Use imported logo
  title: "McDonald's",
  distance: "3.2 km away",
  cuisine: "American Cuisine",
  rating: 5.0,
  type: "American Cuisine",

  location: { lat: 24.7136, lng: 46.6753 },
};

const filterOptions = [
  { id: 1, label: "Menu" },
  { id: 2, label: "Vibes" },
  { id: 3, label: "About" },
  { id: 4, label: "Photos & Videos" },
  { id: 5, label: "Reviews" },
  // Add more filter options as needed
];

export default async function Restaurants({
  params,
}: {
  params: Promise<{ resId: string }>;
}) {
  // Access the resId from the params object
  const restaurantId = (await params).resId;
  //   console.log("Restaurant ID:", resId);
  const restaurantData = exampleRestaurantData;

  const handleFilterClick = (filterId: number | string) => {
    alert(`Filter ${filterId} selected`);
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

  const mapCenter = { lat: 24.7136, lng: 46.6753 }; // Center map on Riyadh
  const mapZoom = 11;

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 flex flex-col">
        <SliderCard
          image={restaurantData.image}
          logo={restaurantData.logo}
          title={restaurantData.title}
          discription={`${restaurantData.distance} - ${restaurantData.cuisine}`}
          type={restaurantData.type} // Pass the type prop
          rating={restaurantData.rating} // Pass rating if SliderCard handles it
        />
        <div className="px-2 md:px-10 lg:px-32  md:flex justify-between py-4 sm:py-8 md:py-10 lg:py-12 md:gap-4 ">
          <div className="w-full md:w-8/12">
            <div className="flex">
              <FilterButtons
                options={filterOptions}
                onSelect={handleFilterClick}
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-4/12 gap-4">
            <Banner />
            <div className="">
              <Heading>Our Stores</Heading>
              <div className=" overflow-hidden h-[300px] md:h-[500px] rounded-3xl w-full ">
                <Map
                  apiKey={googleMapsApiKey ?? ""} // Pass the API key
                  center={mapCenter} // Pass map center
                  zoom={mapZoom} // Pass map zoom
                  restaurants={[restaurantData as any]} // Pass an array containing the single restaurant data (cast as any for simplicity if types are complex)
                />
              </div>
            </div>
            <AdSpot />
          </div>
        </div>
      </main>
    </div>
  );
}
