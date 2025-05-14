"use client";
import Image from "next/image";
import logo from "../../../../public/HomePage/Header/Logo.png";
import menu from "../../../../public/HomePage/Header/hamburgerMenu.svg";
import locationIcon from "../../../../public/HomePage/Header/Location Icon.svg";
import searchIcon from "../../../../public/HomePage/Header/Search Icon.svg";
import closeIcon from "../../../../public//close.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#", label: "About Us" },
  { href: "restaurants", label: "Restaurants" },
  { href: "#", label: "Company" },
];

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="w-full bg-white shadow-[0_2px_6px_-1px_rgba(0,0,0,0.1)] px-2 md:px-10 lg:px-32 flex items-center justify-between py-2 md:py-4 gap-2 mb-[2px]">
      {/* logo/hamIcon */}
      <Image
        src={menu}
        alt="menu"
        className="size-10 md:size-12 lg:hidden cursor-pointer"
        onClick={toggleSidebar}
      />
      <Link className="w-36 h-8 hidden sm:flex cursor-pointer" href="/">
        <Image src={logo} alt="Mithu Logo" className="w-full h-full" />
      </Link>
      {/* serach field */}
      <div className="flex min-w-10/12 sm:min-w-2 lg:max-w-full items-center justify-between gap-2 md:gap-4 bg-[#FCFCFC] border-2 border-[#888] rounded-[10px] px-2 md:px-6 py-2 ">
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
          {navLinks.map((link) => (
            <Link
              href={link.href}
              className="text-[#010101] hover:text-[#3FD554] text-lg font-semibold font-manrope transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2">
          <button className="border-2 border-[#010101] text-[#010101] px-6 py-2 rounded-lg font-semibold font-manrope hover:bg-gray-100 transition-colors cursor-pointer">
            Log In
          </button>
          <button className="bg-[#010101] text-white px-6 py-2 rounded-lg font-semibold font-manrope hover:bg-[#3FD554] transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      ></div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-50 transform lg:hidden transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3 flex flex-col gap-6">
          <button onClick={toggleSidebar} className="self-end p-2">
            <Image src={closeIcon} alt="Close Menu" width={24} height={24} />
            {/* close */}
          </button>

          <nav className="flex flex-col gap-4 border-b pb-6 border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#010101] hover:text-[#3FD554] text-lg font-semibold font-manrope transition-colors self-center"
                // onClick={closeSidebar}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <button className="border-2 border-[#010101] text-[#010101] px-6 py-2 rounded-lg font-semibold font-manrope hover:bg-gray-100 transition-colors cursor-pointer text-center">
              Log In
            </button>
            <button className="bg-[#010101] text-white px-6 py-2 rounded-lg font-semibold font-manrope hover:bg-[#3FD554] transition-colors cursor-pointer text-center">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
