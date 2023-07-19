import React from "react";
import Image from "next/image";

const HackSection = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center justify-around">
          <div>
            <p className="text-[#252B42] text-4xl">Easy Wins</p>
            <p className="max-w-md mt-6 text-[#737373]">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: <br /> Newtonian mechanics
            </p>
          </div>
          <Image src="/../public/easy-wins.png" width="500" height="125" />
        </div>
        <div className="flex items-center justify-around py-10 pl-10 mr-52">
          <Image src="/../public/easy-wins.png" width="500" height="125" />
          <div>
            <p className="text-[#252B42] text-4xl">Hack Growth</p>
            <p className="max-w-md mt-6 text-[#737373]">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: <br /> Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackSection;
