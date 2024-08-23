import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter, CircleUser } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {};

const MobileNav = (props: Props) => {

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="mt-[20px]">
          <AlignCenter />
        </SheetTrigger>
        <SheetContent className="mt-[20px]">
          <SheetHeader>
            <SheetTitle className="mt-[20px]">Ethio Health Aliance</SheetTitle>
            <SheetDescription>
              Join us as we continue to write our story, one health initiative
              at a time. 
            </SheetDescription>
          </SheetHeader>
          <nav className="mt-20">
            <ul className=" list-none gap-5 text-black">
              <li className="">
                <a href="home-medical-clinic.html">Home</a>
              </li>
              <li className="mt-2">
                <a href="#about">About Us</a>
              </li>
              <li className="mt-2">
                <a href="#departments">Departments</a>
              </li>
              <li className="mt-2">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="mt-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
