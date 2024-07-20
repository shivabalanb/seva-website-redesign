"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const SET_SIZE = 8;

  const set1 = [7, 3, 1, 12, 9, 5, 14, 13];
  const set2 = [4, 11, 6, 8, 10, 2, 16, 15];
  const [selectedImages, setSelectedImages] = useState(
    Math.random() < 0.5 ? set1 : set2
  );

  return (
    <section
      id="gallery"
      className="p-2 grid gap-2 grid-cols-5 auto-rows-[200px] md:grid-cols-10  md:auto-rows-[100px] grid-flow-dense "
    >
      <div className={`relative col-span-2 md:col-span-2 md:row-span-2 `}>
        <Image
          src={`/gallery/${selectedImages[0]}.jpg`}
          alt="party "
          layout="fill"
          objectFit="cover"
          className={`rounded-xl`}
        />
      </div>
      <div className={`relative col-span-3 md:col-span-3 md:row-span-2 `}>
        <Image
          src={`/gallery/${selectedImages[1]}.jpg`}
          alt="seniors "
          layout="fill"
          objectFit="cover"
          className={`rounded-xl`}
        />
      </div>
      <div className={`relative col-span-2  md:col-span-2 md:row-span-2 `}>
        <Image
          src={`/gallery/${selectedImages[2]}.jpg`}
          alt="tote"
          layout="fill"
          objectFit="cover"
          className="rounded-xl img_transition"
        />
      </div>
      <div className={`relative col-span-3 md:col-span-3 md:row-span-3  `}>
        <Image
          src={`/gallery/${selectedImages[3]}.jpg`}
          alt="lakehouse"
          layout="fill"
          objectFit="cover"
          className="rounded-xl img_transition"
        />
      </div>
      <div className="relative col-span-3 row-span-2 md:col-span-4 md:row-span-4 ">
        <Image
          src={`/gallery/${selectedImages[4]}.jpg`}
          alt="hike"
          layout="fill"
          objectFit="cover"
          className="rounded-xl img_transition"
        />
      </div>
      <div className="relative col-span-2 row-span-1 md:col-span-3 md:row-span-2 ">
        <Image
          src={`/gallery/${selectedImages[5]}.jpg`}
          alt="longhorn"
          layout="fill"
          objectFit="cover"
          className="rounded-xl img_transition"
        />
      </div>
      <div className="relative col-span-2 row-span-1 md:col-span-3 md:row-span-3 img_transition ">
        <Image
          src={`/gallery/${selectedImages[6]}.jpg`}
          alt="longhorn"
          layout="fill"
          objectFit="cover"
          className="rounded-xl img_transition"
        />
      </div>
      <div className="relative col-span-5 row-span-1 md:col-span-3 md:row-span-2 img_transition">
        <Image
          src={`/gallery/${selectedImages[7]}.jpg`}
          alt="longhorn"
          layout="fill"
          objectFit="cover"
          className="rounded-xl img_transition"
        />
      </div>
    </section>
  );
}
