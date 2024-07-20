"use client";
import Image from "next/image";
import { useState } from "react";

export default function SevaHistoryGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const srcSet = [
    "/history/seva6.jpg",
    "/history/seva5.jpg",
    "/history/seva4.jpg",
    "/history/seva3.jpg",
    "/history/seva2.jpg",
    "/history/seva1.jpg",
  ];

  function getSevaVersion(): string {
    return `Seva ${srcSet.length - selectedIndex}.0`;
  }

  function getSevaYear(): string {
    return (2022 - selectedIndex).toString();
  }

  return (
    <div className="flex gap-2 flex-col-reverse lg:flex-row">
      <div className=" flex flex-row lg:flex-col  gap-2 justify-center">
        {srcSet.map((i, index) => (
          <div
            className="relative w-10 h-8 sm:w-16 sm:h-12 transform hover:cursor-pointer active:scale-90"
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <Image src={i} layout="fill" alt={i} className="rounded-sm" />
            <div
              className={
                "absolute inset-0 flex items-center justify-center rounded-sm " +
                (index !== selectedIndex
                  ? "bg-black bg-opacity-75 "
                  : "  border-8 border-black")
              }
            >
              <span className="text-white">{srcSet.length - index + ".0"}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-[350px] h-[250px] sm:w-[500px] sm:h-[300px] md:w-[700px] md:h-[500px]">
        <div>
          <h1 className="absolute z-10 inset-x-0 top-[-64px] text-center font-bold">
            {getSevaVersion()}
          </h1>
          <h1 className="absolute z-10 inset-x-0 top-0 text-center font-bold text-white">
            {getSevaYear()}
          </h1>
        </div>
        <Image
          key={selectedIndex}
          src={srcSet[selectedIndex]}
          alt="seva1"
          layout="fill"
          className="z-[0] rounded-xl transition-opacity duration-500"
        ></Image>
      </div>
    </div>
  );
}
