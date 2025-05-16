"use client";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigation from "../misc/carouselButtons";
import Heading from "../misc/heading";
import Card from "../misc/card";
import Image from "next/image";
import Button from "../misc/button";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import Restaurant1 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image.png";
import Restaurant2 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image-1.png";
import Restaurant3 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image-2.png";
import Restaurant4 from "../../../../public/HomePage/TrendingRestaurants/Images/Cover Image-3.png";

import Restaurantlogo1 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos.png";
import Restaurantlogo2 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos-1.png";
import Restaurantlogo3 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos-2.png";
import Restaurantlogo4 from "../../../../public/HomePage/TrendingRestaurants/Logos/Logos-3.png";

import star from "../../../../public/HomePage/TrendingRestaurants/Logos/Star.svg";
import sortIcon from "../../../../public/sortIcon.png";
import mapIcon from "../../../../public/map.png";
import listIcon from "../../../../public/list.png";

import coins from "../../../../public/RestaurantPage/filterIcons/Cash in Hand.png";
import cup from "../../../../public/RestaurantPage/filterIcons/Cup With Straw.png";
import popular from "../../../../public/RestaurantPage/filterIcons/Budget Friendly.png";
import open from "../../../../public/RestaurantPage/filterIcons/openNow.png";
import newMithu from "../../../../public/RestaurantPage/filterIcons/mithuNew.png";
import { useEffect, useRef, useState } from "react";

const trendingRestaurants = [
  {
    id: 1,
    image: Restaurant1,
    logo: Restaurantlogo1,
    pointsBack: "15 % points back",
    distance: "3.2 km away",
    rating: 5.0,
    name: "McDonald's",
    cuisine: "American Cusine",
    location: { lat: 24.7136, lng: 46.6753 },
  },
  {
    id: 2,
    image: Restaurant2,
    logo: Restaurantlogo2,
    pointsBack: "20 % points back",
    distance: "3.8 km away",
    rating: 4.8,
    name: "Starbucks",
    cuisine: "Coffee House",
    location: { lat: 24.758, lng: 46.6412 },
  },
  {
    id: 3,
    image: Restaurant3,
    logo: Restaurantlogo3,
    pointsBack: "10 % points back",
    distance: "4.3 km away",
    rating: 4.7,
    name: "KFC",
    cuisine: "Fast Food House",
    location: { lat: 24.735, lng: 46.701 },
  },
  {
    id: 4,
    image: Restaurant4,
    logo: Restaurantlogo4,
    pointsBack: "25 % points back",
    distance: "2.1 km away",
    rating: 3.9,
    name: "Burger King",
    cuisine: "Burger Speciality",
    location: { lat: 24.6877, lng: 46.7219 },
  },
  {
    id: 5,
    image: Restaurant1,
    logo: Restaurantlogo1,
    pointsBack: "15 % points back",
    distance: "3.2 km away",
    rating: 5.0,
    name: "McDonald's",
    cuisine: "American Cusine",
    location: { lat: 24.7, lng: 46.65 },
  },
  {
    id: 6,
    image: Restaurant2,
    logo: Restaurantlogo2,
    pointsBack: "20 % points back",
    distance: "3.8 km away",
    rating: 4.8,
    name: "Starbucks",
    cuisine: "Coffee House",
    location: { lat: 24.72, lng: 46.69 },
  },
  {
    id: 7,
    image: Restaurant3,
    logo: Restaurantlogo3,
    pointsBack: "10 % points back",
    distance: "4.3 km away",
    rating: 4.7,
    name: "KFC",
    cuisine: "Fast Food House",
    location: { lat: 24.695, lng: 46.71 },
  },
  {
    id: 8,
    image: Restaurant4,
    logo: Restaurantlogo4,
    pointsBack: "25 % points back",
    distance: "2.1 km away",
    rating: 3.9,
    name: "Burger King",
    cuisine: "Burger Speciality",
    location: { lat: 24.74, lng: 46.68 },
  },
];

const filterOptions = [
  { id: 1, label: "Pay with Coins", icon: coins },
  { id: 2, label: "For You", icon: cup },
  { id: 3, label: "Popular", icon: popular },
  { id: 4, label: "Open Now", icon: open },
  { id: 5, label: "New on Mithu", icon: newMithu },
  // Add more filter options as needed
];

const sortOptions = [
  { value: "popular", label: "Popular" },
  { value: "rating", label: "Rating" },
  { value: "distance", label: "Distance" },
  { value: "newest", label: "Newest" },
];

export default function TrendingRestaurants() {
  const [currentView, setCurrentView] = useState("list"); // State to toggle between 'list' and 'map'

  const [emblaRefOffers] = useEmblaCarousel({ loop: false }); // Keeping Embla if you still use it for a part of the listing

  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]); // Default to the first option
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prev) => !prev);
  };

  const handleFilterClick = (filterId: number) => {
    console.log(`Filter ${filterId} clicked`);
  };

  const handleSortClick = () => {
    console.log("Sort button clicked");
  };

  const handleToggleView = () => {
    setCurrentView((prevView) => (prevView === "list" ? "map" : "list"));
  };
  const handleLoadMore = () => {
    alert("load more clicked");
  };

  const handleSortOptionClick = (option: (typeof sortOptions)[0]) => {
    setSelectedSort(option);
    setIsSortDropdownOpen(false);
    console.log("Sorting by:", option.value);
    // Trigger your actual sorting logic here, e.g., call a prop function
    // onSortChange(option.value);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortDropdownOpen(false);
      }
    };

    if (isSortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortDropdownOpen]);

  const googleMapsApiKey = "AIzaSyCdx38MbfGzv1gSZZpO1cEp5bqyBkKvZSw";

  // Define map options (center, zoom, etc.)
  const mapOptions = {
    center: { lat: 24.7136, lng: 46.6753 }, // Center map on Riyadh (example coordinates)
    zoom: 11, // Example zoom level
    disableDefaultUI: true, // Optional: hide default map controls
    zoomControl: true,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black pb-1 font-manrope ">
        Restaurants in Riyadh, KSA
      </h1>
      {/* filterOptions  */}
      <div className="flex flex-wrap items-center gap-2  py-4">
        <button className="flex-shrink-0 p-2 rounded-full border border-gray-300 cursor-pointer">
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
              className="flex-shrink-0 flex items-center gap-1 px-4 py-2 rounded-md border cursor-pointer border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
              onClick={() => handleFilterClick(filter.id)}
            >
              <Image alt="icon/..." className="size-4" src={filter.icon} />
              <span className="hidden md:flex justify-center items-center">
                {filter.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* heading */}
      <div className="md:flex justify-between items-center md:items-start mb-1 md:mb-4 ">
        <Heading
          className="mb-0"
          subheading="We bring you the best value dining deals to let you experience the best!"
        >
          Dining / Restaurant
        </Heading>
        {/* sort / map button  */}
        <div className="flex items-center gap-2 flex-shrink-0 justify-center">
          {/* <Button
            className="px-4 py-2 "
            onClick={handleSortClick}
            variant="secondary"
          >
            <Image src={sortIcon} className="size-5" alt="sort" />
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
          </Button> */}
          {/* Sort Dropdown */}
          <div className="relative " ref={sortDropdownRef}>
            <Button
              className="px-4 py-2 flex gap-1 md:gap-2"
              onClick={toggleSortDropdown}
              variant="secondary"
            >
              <Image
                src={sortIcon}
                className="size-5"
                alt="sort"
                width={20}
                height={20}
              />
              {selectedSort.label}
            </Button>

            {isSortDropdownOpen && (
              <div
                className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="sort-menu-button"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedSort.value === option.value
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700"
                      } hover:bg-gray-100`}
                      role="menuitem"
                      onClick={() => handleSortOptionClick(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button
            className="px-4 py-2 flex gap-1 md:gap-2"
            onClick={handleToggleView}
          >
            {currentView === "list" ? (
              <Image src={mapIcon} className="size-5" alt="sort" />
            ) : (
              <Image src={listIcon} className="size-5" alt="sort" />
            )}
            {currentView === "list" ? "Show Map" : "Show List"}
          </Button>
        </div>
      </div>

      {/* Content Area: List or List + Map */}
      {/* Apply fixed height to the parent flex container on medium screens and up when map is visible */}
      <div
        className={`flex flex-col md:flex-row gap-4 ${
          currentView === "map" ? "md:h-[500px]" : ""
        }`}
      >
        {/* Restaurant List Section */}
        {currentView === "list" ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingRestaurants.map((res) => (
              <Card
                key={res.id}
                image={res.image}
                imageBadgeText={res.pointsBack}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1 md:gap-2 text-black">
                    <Image
                      src={res.logo}
                      alt="badge"
                      className="rounded-md"
                      width={40}
                      height={40}
                    />
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
                    <Image
                      src={star}
                      alt="rating"
                      className="size-[16px]"
                      width={16}
                      height={16}
                    />
                    <span className="">{res.rating}</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {/* List on the left (md+) or full width stacked (small screens) */}
            {/* Apply fixed height and always-on scrolling when in map view */}
            <div className="w-full md:w-8/12 grid grid-cols-1  lg:grid-cols-2 gap-4 p-1 h-[500px] overflow-y-auto">
              {trendingRestaurants.map((res) => (
                <Card
                  key={res.id}
                  image={res.image}
                  imageBadgeText={res.pointsBack}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1 md:gap-2 text-black">
                      <Image
                        src={res.logo}
                        alt="badge"
                        className="rounded-md"
                        width={40}
                        height={40}
                      />
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
                      <Image
                        src={star}
                        alt="rating"
                        className="size-[16px]"
                        width={16}
                        height={16}
                      />
                      <span className="">{res.rating}</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Section on the right (md+) or full width stacked (small screens) */}
            {/* Apply fixed height on small screens and fill parent height on md+ */}
            <div className="w-full md:w-4/12 rounded-lg overflow-hidden h-96 md:h-full">
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={mapOptions.center}
                  zoom={mapOptions.zoom}
                  options={mapOptions}
                >
                  {trendingRestaurants.map((res) =>
                    res.location?.lat && res.location?.lng ? (
                      <Marker
                        key={`marker-${res.id}`}
                        position={{
                          lat: res.location.lat,
                          lng: res.location.lng,
                        }}
                        title={res.name}
                      />
                    ) : null
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
