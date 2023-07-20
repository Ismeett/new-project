import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col items-center">
        <h1 className="md:text-6xl text-4xl text-[#252B42] max-w-xl text-center">
          How To Make Good Things Great
        </h1>
        <p className="text-[#737373] text-center py-10 text-lg max-w-lg">
          An audio book, eBook, and interview series for people who make things.
        </p>
        <div>
          <button className="bg-[#23A6F0] px-8 py-3 text-white font-bold rounded mr-2">
            Try Now
          </button>
          <button className="border border-[#23A6F0] px-8 py-3 text-[#23A6F0] font-bold rounded">
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
