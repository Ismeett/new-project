import React from "react";
import Image from "next/image";
import LineCard from "../components/LineCard";

const Products = () => {
  return (
    <div className="py-32">
      <div className="flex flex-col justify-center items-center">
        <p className="text-blue-700 text-4xl">Featured Products</p>
        <p className="text-gray-700 text-center pt-4">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-10  py-12">
        <div className="relative w-2/3">
          <Image src="/../public/half-browser.png" width="500" height="125" />
          <Image
            src="/../public/stat.png"
            width="250"
            height="125"
            className="absolute top-12 -right-12"
          />
          <Image
            src="/../public/stat.png"
            width="250"
            height="125"
            className="absolute bottom-0 -left-44"
          />
        </div>
        <div className="space-y-6">
          <LineCard />
          <LineCard />
          <LineCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
