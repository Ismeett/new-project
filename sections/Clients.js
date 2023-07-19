import React from "react";
import Image from "next/image";
import Card from "../components/Card";

const Clients = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl text-[#252B42] font-bold">What Clients Say</p>
        <p className="text-center text-[#737373] mt-6">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 px-20">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Clients;
