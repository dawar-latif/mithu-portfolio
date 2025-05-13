"use client";
import BlogPosterCard from "../cards/blogPosterCard";
import Heading from "../misc/heading";

import blog1 from "../../../../public/HomePage/OurBlogs/Blog Images.png";
import blog2 from "../../../../public/HomePage/OurBlogs/Blog Images-1.png";
import blog3 from "../../../../public/HomePage/OurBlogs/Blog Images-2.png";
import Button from "../misc/button";

export default function Blogs() {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full flex flex-col py-4 sm:py-8 md:py-10 lg:py-12">
      <Heading
        className="md:text-center py-4"
        subheading="Our latest news on mithu website"
      >
        Our Blogs
      </Heading>

      <div className="grid lg:grid-flow-col lg:grid-rows-2 gap-4 lg:gap-8">
        <BlogPosterCard
          image={blog1}
          className="lg:row-span-2 lg:flex-col justify-between"
          imageClassName="lg:w-full  "
        >
          <div className="flex flex-col px-4 text-black justify-between gap-[8px] mt-2 ">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
              <p className="text-[#888] leading-none">BUSINESS</p>
              <h3 className="text-xl font-semibold leading-none">
                New Year Webinar
              </h3>
              <p className="text-[#888] leading-none">* 24 June, 2025</p>
              <p className="text-sm leading-none text-wrap">
                There was no band-aids at home and I would not go to seek them.
                I entrusted you to Mithu.
              </p>
            </div>

            <Button
              onClick={handleButtonClick}
              className="w-fit lg:w-full px-2 md:px-10 mt-2 text-xs md:text-base lg:text-xl"
            >
              Read More
            </Button>
          </div>
        </BlogPosterCard>
        <BlogPosterCard
          image={blog2}
          className="lg:col-span-1 md:justify-between"
          // imageClassName="lg:w-1/2 lg:h-[210px]"
        >
          <div className="flex flex-col px-4 text-black justify-between gap-[8px] ">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
              <p className="text-[#888] leading-none">BUSINESS</p>
              <h3 className="text-xl font-semibold leading-none">
                New Year Webinar
              </h3>
              <p className="text-[#888] leading-none">* 24 June, 2025</p>
              <p className="text-sm leading-none">
                There was no band-aids at home and I would not go to seek them.
                I entrusted you to Mithu.
              </p>
            </div>
            <Button
              onClick={handleButtonClick}
              className="w-fit px-2 md:px-10 mt-2 text-xs md:text-base lg:text-xl"
            >
              Read More
            </Button>
          </div>
        </BlogPosterCard>
        <BlogPosterCard
          image={blog3}
          className="lg:col-span-1 md:justify-between"
          // imageClassName="lg:w-1/2 lg:h-[210px]"
        >
          <div className="flex flex-col px-4 text-black justify-between gap-[8px] ">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
              <p className="text-[#888] leading-none">BUSINESS</p>
              <h3 className="text-xl font-semibold leading-none">
                New Year Webinar
              </h3>
              <p className="text-[#888] leading-none">* 24 June, 2025</p>
              <p className="text-sm leading-none">
                There was no band-aids at home and I would not go to seek them.
                I entrusted you to Mithu.
              </p>
            </div>
            <Button
              onClick={handleButtonClick}
              className="w-fit px-2 md:px-10 mt-2 text-xs md:text-base lg:text-xl"
            >
              Read More
            </Button>
          </div>
        </BlogPosterCard>
      </div>
    </section>
  );
}
