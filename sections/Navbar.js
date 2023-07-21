import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="container mx-auto pt-3">
      <div className="flex items-center md:justify-between justify-between md:px-0 px-5">
        <Image src="/../public/logo.png" width="125" height="25" />

        <ul className="cursor-pointer md:flex space-x-4 w-7/12 text-[#737373] font-bold hidden">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Product</li>
          </Link>
          <Link href="/">
            <li>Pricing</li>
          </Link>
          <Link href="/">
            <li>Contact</li>
          </Link>
        </ul>

        <div className="md:flex hidden ">
          <button className="text-[#23A6F0] font-bold mr-10">Login</button>
          <button className="bg-[#23A6F0] text-white font-bold px-6 py-3 rounded flex items-center">
            <span className="mr-2">Become a member</span>
            <Image src="/../public/arrow.png" width="14" height="20" />
          </button>
        </div>
        <Image
          src="/../public/menu.png"
          width="40"
          height="50"
          className="md:hidden"
          onClick={handleNav}
        />
      </div>
      <div
        className={`md:hidden ${
          nav ? "block" : "hidden"
        } my-4 flex justify-center items-center text-[#737373] text-lg font-medium text-center`}
      >
        <ul>
          <Link href="/">
            <li className="my-4 ">Home</li>
          </Link>
          <Link href="/">
            <li className="my-4">Product</li>
          </Link>
          <Link href="/">
            <li className="my-4">Pricing</li>
          </Link>
          <Link href="/">
            <li className="my-4">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
