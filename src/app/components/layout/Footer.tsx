import Image from "next/image";
import logo from "../../../../public/HomePage/Header/Logo.png";
import instagram from "../../../../public/HomePage/Footer/Icons/instagram.svg";
import twitter from "../../../../public/HomePage/Footer/Icons/twitter.svg";
import facebook from "../../../../public/HomePage/Footer/Icons/facebook.svg";
import emailIcon from "../../../../public/HomePage/Footer/Icons/email icon.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center font-manrope">
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 px-2 md:px-10 lg:px-32 pt-4 sm:pt-8 md:pt-16 lg:pt-32 pb-2 sm:pb-4 md:pb-8 lg:pb-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          {/* logo section */}
          <div className="flex flex-col gap-4 justify-center items-center md:items-start ">
            <Image
              src={logo}
              alt="Mithu Logo"
              className="w-36 h-8 flex object-cover"
            />
            <h2 className="text-[#888] text-sm text-center md:text-left ">
              There was no band-aids at home and I would not go to seek them. I
              entrusted you to Mithu and they will see you faster than you
              think.
            </h2>

            <div className="flex gap-2 justify-center items-center">
              <Link href="#">
                <Image src={facebook} alt="Facebook" width={28} height={28} />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="Twitter" width={28} height={28} />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="Instagram" width={28} height={28} />
              </Link>
            </div>
          </div>
          {/* email input small screen */}
          <div className="min-w-1 xl:hidden py-4">
            <label className="text-[#888] text-sm">SUBSCRIBE</label>
            <div className="flex min-w-2 lg:max-w-full items-center justify-between gap-4 bg-[#FCFCFC] border-2 border-[#888] rounded-[10px] px-6 py-2 ">
              <input
                type="text"
                placeholder="Email"
                className="min-w-10/12 outline-none bg-transparent text-[#888] text-base font-normal font-manrope"
              />

              <Image
                src={emailIcon}
                alt="Search"
                className="ml-2 size-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h2 className="mb-[2px] text-sm font-semibold text-gray-900 uppercase ">
              Company
            </h2>
            <ul className="text-[#888] font-medium text-sm">
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Brand Center
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-[2px] text-sm font-semibold text-gray-900 uppercase ">
              Help center
            </h2>
            <ul className="text-[#888] font-medium text-sm">
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-[2px] text-sm font-semibold text-gray-900 uppercase ">
              Legal
            </h2>
            <ul className="text-[#888] font-medium text-sm">
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="text-center md:text-left">
            <h2 className="mb-[2px] text-sm font-semibold text-gray-900 uppercase ">
              Download
            </h2>
            <ul className="text-[#888] font-medium text-sm">
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-[2px]">
                <Link href="#" className="hover:underline">
                  MacOS
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
        {/* email input large screen */}
        <div className="min-w-1 hidden xl:flex flex-col py-4">
          <label className="text-[#888] text-sm">SUBSCRIBE</label>
          <div className="flex items-center justify-between gap-4 bg-[#FCFCFC] border-2 border-[#888] rounded-[10px] px-6 py-2 ">
            <input
              type="text"
              placeholder="Email"
              className="min-w-10/12 outline-none bg-transparent text-[#888] text-base font-normal font-manrope"
            />

            <Image
              src={emailIcon}
              alt="Search"
              className="ml-2 size-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* black strip bottom*/}
      <div className=" w-full text-white text-xs bg-[#010101] flex justify-center md:justify-end items-center gap-6 md:gap-4 font-medium px-2 md:px-10 lg:px-32 py-4 sm:py-6 ">
        <h2>Terms and conditions</h2>
        <h2>Privacy Policy</h2>
        <h2>© 2025 Mithu</h2>
      </div>
    </footer>
  );
}
