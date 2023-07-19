import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className="border">
        <Image src="/../public/stars.png" width="125" height="125" />
        <p className="text-[#737373] font-bold">
          Slate helps you see how many <br /> more days you need to work to
          <br />
          reach your financial goal.
        </p>
        <div className="flex">
          <Image src="/../public/circle.png" width="50" height="125" />
          <div>
            <p className="text-[#23A6F0] font-bold">Regina Miles</p>
            <p className="text-[#252B42] font-bold">Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
