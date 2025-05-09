import Image from "next/image";
import googlePlay from "../../../../public/HomePage/DownloadApp/Google.png";
import applePlay from "../../../../public/HomePage/DownloadApp/Apple.png";
import phone from "../../../../public/HomePage/DownloadApp/Download App.png";

export default function Banner() {
  return (
    <section className="w-full md:mt-24 mb-4 min-h-64 flex items-center justify-between bg-[#CAFFD1] rounded-3xl px-4 sm:px-6 md:px-8 lg:px-16  ">
      <div className="flex gap-3 md:gap-4  flex-col justify-center items-center md:items-start  text-center sm:text-start ">
        <label className="font-bold text-2xl">Download App Now!</label>
        <label className="font-normal text-sm  ">
          Download the Mithu app on your mobile device for a more convenient and
          efficient dining & take away experience.
        </label>
        <div className="flex pt-2 gap-2 items-center md:items-start">
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
      <div className="hidden md:flex w-1/3 items-end relative min-h-64">
        <Image
          src={phone}
          className="absolute bottom-0 right-0 md:h-[290px]  lg:h-[310px] xl:h-[330px]"
          alt="android phone hand"
        />
      </div>
    </section>
  );
}
