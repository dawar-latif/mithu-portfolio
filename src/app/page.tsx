import BestSellers from "./components/homePageSections/BestSellers";
import Categories from "./components/homePageSections/Categories";
import HeroSlider from "./components/homePageSections/HeroSlider";
import Blogs from "./components/homePageSections/Blogs";
import TrendingRestaurants from "./components/homePageSections/TrendingRestaurants";
import UnmissableOffers from "./components/homePageSections/UnmissableOffers";
import Banner from "./components/homePageSections/Banner";
import AffiliateStores from "./components/homePageSections/AffiliateStores";
import Offers from "./components/homePageSections/Offers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 flex flex-col">
        <HeroSlider />
        <div className="px-4 md:px-10 lg:px-32 ">
          <Categories />
          <AffiliateStores />
          <UnmissableOffers />
          <BestSellers />
          <Offers />
          <TrendingRestaurants />
          <Blogs />
          <Banner />
        </div>
      </main>
    </div>
  );
}
