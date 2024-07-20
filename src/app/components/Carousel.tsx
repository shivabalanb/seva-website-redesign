"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  "/history/seva1.jpg",
  "/history/seva2.jpg",
  "/history/seva3.jpg",
  "/history/seva4.jpg",
  "/history/seva5.jpg",
  "/history/seva6.jpg",
];

const Carousel: React.FC = () => {
  return (
    <div className="banner w-full h-[325px] relative text-center overflow-hidden">
      <div
        className="slider absolute w-[300px] h-[200px] inset-0 m-auto "
        style={
          {
            transformStyle: "preserve-3d",
            transform: "perspective(2000px)",
            zIndex: 2,
            animation: "autoRun 20s linear infinite",
          } as React.CSSProperties
        }
      >
        {images.map((image, index) => {
          const rotation = (index - 1) * (360 / images.length);

          // Inline styles
          const style: React.CSSProperties = {
            position: "absolute",
            inset: "0 0 0 0",
            transform: `rotateY(${rotation}deg) translateZ(300px)`,
          };

          return (
            <div key={index} className="item absolute" style={style}>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
    // <div className="relative w-full h-100vh text-center ">
    //   <div
    //     className="absolute  inset-x-auto w-[500px] h-[200px] bg-sky-200  transform  transform-style-preserve-3d  "
    //     style={{
    //       perspective: "1000px",
    //     }}
    //   >
    // {images.map((image, index) => (
    //       <span
    //         key={index}
    //         className="absolute inset-0  "
    //         style={{
    //           transform: `
    //           translateZ(150px)
    // rotateY(${
    //   Math.abs(index - images.length / 2 - 1) * (360 / images.length)
    // }deg)

    //           `,
    //         }}
    //       >
    //         <Image
    //           src={image}
    //           alt={`Slide ${index + 1}`}
    //           layout="fill"
    //           objectFit="cover"
    //           className="rounded-xl "
    //         />
    //       </span>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Carousel;
