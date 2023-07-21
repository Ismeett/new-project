import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col items-center">
        <h1 className="md:text-6xl text-4xl text-blue-700 max-w-xl text-center">
          How To Make Good Things Great
        </h1>
        <p className="text-gray-700 text-center py-10 text-lg max-w-lg">
          An audio book, eBook, and interview series for people who make things.
        </p>
        <div>
          <button className="bg-blue-300 px-8 py-3 text-white font-bold rounded mr-2">
            Try Now
          </button>
          <button className="border border-blue-300 px-8 py-3 text-blue-300 font-bold rounded">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <Image src="/../public/Browsers.png" width="1000" height="500" />
      </div>
    </div>
  );
};

export default Hero;
