import {
  IoLogoGooglePlaystore,
  IoLogoWindows,
  IoLogoInstagram,
} from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex flex-col bg-mDarkGray w-full h-44 gap-4 items-center md:h-36 p-10 md:grid md:grid-cols-3">
      <div id="left-elements" className="flex gap-3 items-center">
        <div className="flex bg-mWhite p-1 gap-3 text-mBlack w-44 h-15 text-sm rounded-xl items-center cursor-pointer ">
          <IoLogoGooglePlaystore className="text-mBlack text-4xl" />
          <div className="">
            <p className="text-xs font-semibold text-mBlack">Download on the</p>
            <p className="text-base ">Google Play</p>
          </div>
        </div>
        <div className="flex bg-mWhite p-1 gap-3 text-mBlack w-44 h-15 text-sm rounded-xl items-center cursor-pointer ">
          <IoLogoWindows className="text-mBlack text-4xl" />
          <div className="">
            <p className="text-xs font-semibold text-mBlack">Download on the</p>
            <p className="text-base ">Windows Store</p>
          </div>
        </div>
      </div>
      <div
        id="center-elements"
        className="flex justify-center items-center text-center gap-3"
      >
        <p className="text-mWhite text-sm font-semibold">
          COPYRIGHT © 2023 miFinanz - Cohorte14
        </p>
      </div>
      <div
        id="rigth-elements"
        className="flex justify-center items-center gap-3"
      >
        <div className="bg-mWhite  w-10 h-10 rounded-full text-mDarkGray justify-center items-center cursor-pointer">
          <Link href={"https://www.nocountry.tech/"} target="_blank">
            <GrFacebookOption className="w-full text-5xl mt-[0.2px]" />
          </Link>
        </div>
        <div className="bg-mWhite  w-10 h-10 rounded-full text-mDarkGray justify-center items-center cursor-pointer">
          <Link href={"https://www.nocountry.tech/"} target="_blank">
            <IoLogoInstagram className="w-full text-3xl mt-1" />
          </Link>
        </div>
        <div className="bg-mWhite  w-10 h-10 rounded-full text-mDarkGray justify-center items-center cursor-pointer">
          <Link href={"https://www.nocountry.tech/"} target="_blank">
            <FaXTwitter className="w-full text-3xl mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
