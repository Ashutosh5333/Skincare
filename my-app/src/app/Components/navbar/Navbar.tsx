"use client";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="border-2 fixed p-2 px-4 bg-[#FFFFFF] z-50 w-full border-green-600">
        <nav className="w-full m-auto px-4 py-1   flex justify-between items-center">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button className="text-xl rounded-xl">
              <GiHamburgerMenu className="bg-[#F8F8F8] p-2 text-[#4C4D4F] text-4xl" />
            </button>
          </div>

          <h2 className="Skinlogo text-4xl font-medium headitail font-sans flex justify-center ">
            <Image
              src={"/assets/Skinclub.svg"}
              alt="logo"
              width={150}
              height={130}
            />
          </h2>

          {/* Desktop View */}
          <div className="md:flex  justify-center lg:gap-5 font-sans ">
            <h2 className="ml-4 m-auto hidden font-cabin font-normal lg:block text-[#4C4D4F]">
              Sunday, 20 August
            </h2>

            <h2 className="ml-4 m-auto hidden lg:block font-cabin font-normal  text-[#4C4D4F]">
              1:50 PM
            </h2>

            <h2 className="ml-4 m-auto rounded-xl">
              <IoIosNotificationsOutline className="bg-[#F8F8F8] p-2 text-[#4C4D4F] text-4xl" />
            </h2>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
