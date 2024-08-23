
import axios from "axios";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsDown, CircleUser } from "lucide-react";

type Props = {};

const MainNav = (props: Props) => {
  //  console.log("isLogedIn", isLogedIn);
  //  console.log("isAdmin", isAdmin);
  //  console.log("userData", userData);

  return (
    <div className="hidden md:flex">
      <nav className="main-menu d-none d-lg-inline-block">
        <ul className=" flex gap-4 font-bold mt-[35px] text-xl">
          <li className="">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li className="">
            <a href="#departments">Departments</a>
          </li>
          <li className="">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="">
            <a href="#donate">Donate</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
