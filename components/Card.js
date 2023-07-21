import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="md:py-32 py-6">
      <div className="border px-8 py-10">
        <Image src="/../public/stars.png" width="125" height="125" />
        <p className="text-gray-700 font-bold py-6">
          Slate helps you see how many <br /> more days you need to work to
          <br />
          reach your financial goal.
        </p>
        <div className="flex">
          <Image
            src="/../public/circle.png"
            width="50"
            height="125"
            className="mr-2"
          />
          <div>
            <p className="text-blue-300 font-bold">Regina Miles</p>
            <p className="text-blue-700 font-bold">Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
