"use client";
import React from "react";
import Image from "next/image";
import logo from "@/asset/img/logo.svg";
import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import img1 from "@/assets/images/navimage.jpg"

const Header = () => {

  return (
    <header className=" top-0 sticky mobile-nav w-full border-b z-10 bg-white shadow-md">
      <div className="h-16 lg:h-24 flex justify-between mx-5">
        {/* desktop and mobile */}
        <a href="/" className="  font-bold">
          <Image
            src={img1}
            alt="Ethio Health Alliance logo"
            className="w-40 md:w-40 lg:w-56" // Adjust these values as needed
          />
        </a>
        <div className="flex justify-end">
          {/* desktop */}
          <MainNav />
          {/* mobile */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
