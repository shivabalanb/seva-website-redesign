import Image from "next/image";
import React from "react";

export type OfficerProps = {
  name: string;
  role: string;
  bio: string;
};

const Card = ({ info }: { info: OfficerProps }) => {
  const name = info.name.split(" ");
  return (
    <div className="relative flex flex-col w-72   hover:cursor-pointer active:scale-95 transition-all duration-100 ease-in-out">
      <div className="relative w-72 h-56">
        <Image
          src={`/officers/${info.name}.jpg`}
          alt={info.name}
          layout="fill"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="bg-white rounded-b-xl shadow-md p-4 text-cente h-36 text-center flex flex-col items-center justify-center">
        <h3 className="py-2 text-2xl">
          {name[0]} {name[1]}
        </h3>
        <p className=" text-lg text-orange-1 font-semibold">{info.role}</p>
      </div>
    </div>
  );
};

export default Card;
