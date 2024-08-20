"use client";
import React from "react";
import Image from "next/image";
import logo from "@/asset/img/logo.svg";
import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {

  return (
    <header className=" top-0 sticky mobile-nav w-full border-b z-10 bg-white shadow-md">
      <div className="h-16 lg:h-24 flex justify-between mx-5">
        {/* desktop and mobile */}
        <h1 className=" mt-[35px] font-bold">Ethio Health Aliance</h1>
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
