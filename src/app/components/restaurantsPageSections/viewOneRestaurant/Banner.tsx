import Image from "next/image";
import googlePlay from "../../../../../public/HomePage/DownloadApp/Google.png";
import applePlay from "../../../../../public/HomePage/DownloadApp/Apple.png";

export default function Banner() {
  return (
    <section className="w-full  min-h-64 flex items-center justify-between bg-[#CAFFD1] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14  ">
      <div className="flex gap-3 md:gap-4  flex-col justify-center items-center text-center  ">
        <label className="font-bold text-2xl">Download App Now!</label>
        <label className="font-normal text-sm  ">
          Download the Mithu app on your mobile device for a more convenient and
          efficient dining & take away experience.
        </label>
        <div className="flex flex-wrap pt-2 gap-2 items-center place-content-center">
          <Image
            src={googlePlay}
            className="w-24 md:w-32 cursor-pointer"
            alt="google play"
          />
          <Image
            src={applePlay}
            className="w-24 md:w-32 cursor-pointer"
            alt="apple play"
          />
        </div>
      </div>
    </section>
  );
}
