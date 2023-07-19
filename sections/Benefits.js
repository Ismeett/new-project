import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center">
          <Image src="/../public/cards/reading.png" width="70" height="125" />
          <p className="text-[#252B42] text-2xl py-6">Easy Wins</p>
          <p className="text-center text-[#737373]">
            Get your best looking smile now!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/../public/cards/book.png" width="70" height="125" />
          <p className="text-[#252B42] text-2xl py-6">Concrete</p>
          <p className="text-center text-[#737373]">
            DentalCare is most focused in <br /> helping you discover your most{" "}
            <br />
            beauiful smile
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/../public/cards/stocks.png" width="70" height="125" />
          <p className="text-[#252B42] text-2xl py-6">Hack Growth</p>
          <p className="text-center text-[#737373]">
            Overcame any hurdle or any other <br /> problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
