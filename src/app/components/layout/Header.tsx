import Image from "next/image";
import logo from "../../../../public/HomePage/Header/Logo.png";
import menu from "../../../../public/HomePage/Header/hamburgerMenu.svg";
import locationIcon from "../../../../public/HomePage/Header/Location Icon.svg";
import searchIcon from "../../../../public/HomePage/Header/Search Icon.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.15)] px-4 md:px-10 lg:px-32 flex items-center justify-between py-4 gap-2 ">
      {/* logo/hamIcon */}
      <Image
        src={menu}
        alt="menu"
        className="size-10 md:size-12 lg:hidden cursor-pointer"
      />
      <Image
        src={logo}
        alt="Mithu Logo"
        className="w-36 h-8 hidden sm:flex cursor-pointer"
      />
      {/* serach field */}
      <div className="flex min-w-2 lg:max-w-full items-center justify-between gap-4 bg-[#FCFCFC] border-2 border-[#888] rounded-[10px] px-6 py-2 ">
        <input
          type="text"
          placeholder="Search for restaurant, stores etc..."
          className="min-w-1 outline-none bg-transparent text-[#888] text-base font-normal font-manrope"
        />
        <div className="min-w-1 hidden 2xl:flex  items-center gap-2 pl-4 border-l border-[#eee]">
          <Image src={locationIcon} alt="Location" width={18} height={18} />
          <span className="flex justify-center items-center gap-1 text-[#010101] text-sm font-manrope font-medium">
            Riyadh,&nbsp;KSA&nbsp;
            <span className="flex justify-center items-center text-[#888] ">
              47,3654921,&nbsp;21,655246
            </span>
          </span>
        </div>
        <Image
          src={searchIcon}
          alt="Search"
          className="ml-2 size-8 cursor-pointer"
        />
      </div>
      {/* navigation */}
      <div className="hidden lg:flex gap-4">
        <nav className="flex gap-2 items-center">
          <Link
            href="#"
            className="text-[#010101] hover:text-brand text-lg font-medium font-manrope transition-colors"
          >
            About&nbsp;Us
          </Link>
          <Link
            href="#"
            className="text-[#010101] hover:text-brand text-lg font-medium font-manrope transition-colors"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-[#010101] hover:text-brand text-lg font-medium font-manrope transition-colors"
          >
            Company
          </Link>
        </nav>

        <div className="flex gap-2">
          <button className="border-2 border-[#010101] text-[#010101] px-6 py-2 rounded-lg font-semibold font-manrope hover:bg-gray-100 transition-colors cursor-pointer">
            Log In
          </button>
          <button className="bg-[#010101] text-white px-6 py-2 rounded-lg font-semibold font-manrope hover:bg-brand transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
