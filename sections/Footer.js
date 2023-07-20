import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#252B42] py-32">
        <div className="flex flex-col justify-center items-center text-white">
          <p className="text-4xl">Ready to get started?</p>
          <p className="my-6 md:text-left text-center">
            An audio book, eBook, and interview series for people who make
            things.
          </p>
          <button className="bg-[#23A6F0] text-white font-bold px-8 py-3 rounded flex items-center">
            Start Today
          </button>
        </div>
      </div>
      <div className="py-6">
        <p className="text-center text-[#737373] font-bold">
          Made With Love By Figmaland All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
