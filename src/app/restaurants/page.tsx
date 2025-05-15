import BestSellers from "../components/restaurantsPageSections/BestSellers";
import Categories from "../components/restaurantsPageSections/Categories";
import Slider from "../components/restaurantsPageSections/Slider";
import TrendingRestaurants from "../components/restaurantsPageSections/TrendingRestaurants";
import UnmissableOffers from "../components/restaurantsPageSections/UnmissableOffers";

export default function Restaurants() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 flex flex-col">
        <div className="px-2 md:px-10 lg:px-32 ">
          <Slider />
          <UnmissableOffers />
          <Categories />
          <TrendingRestaurants />
        </div>
        <BestSellers />
      </main>
    </div>
  );
}
