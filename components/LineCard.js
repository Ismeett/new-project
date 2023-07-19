import React from "react";

const LineCard = () => {
  return (
    <div>
      <div className="flex border-l-8 border-[#E74040] py-4">
        <div className="ml-4">
          <div className="w-20 h-20 bg-[#ECECEC] relative rounded-full">
            <p className="absolute top-6 left-7 text-[#E74040] font-bold text-2xl">
              01
            </p>
          </div>
        </div>
        <div className="ml-4">
          <p className="text-[#252B42] text-2xl">Easy to use</p>
          <p className="text-[#737373]">
            Things on a very small scale behave like nothing <br /> that you
            have any direct experience about.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineCard;
