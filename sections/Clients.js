import React from "react";
import Image from "next/image";
import Card from "../components/Card";

const Clients = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl text-blue-700 font-bold">What Clients Say</p>
        <p className="text-center text-gray-700 mt-6">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid md:grid-cols-3  gap-5 md:px-20 px-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Clients;
