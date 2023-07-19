import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto pt-3">
      <div className="flex items-center justify-between">
        <Image src="/../public/logo.png" width="125" height="25" />

        <ul className="cursor-pointer flex space-x-4 w-7/12 text-[#737373] font-bold">
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

        <div className="flex">
          <button className="text-[#23A6F0] font-bold mr-10">Login</button>
          <button className="bg-[#23A6F0] text-white font-bold px-6 py-3 rounded flex items-center">
            <span className="mr-2">Become a member</span>
            <Image src="/../public/arrow.png" width="14" height="20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
