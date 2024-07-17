import Image from "next/image";
import Navbar from "./components/Navbar";
import { CaretDoubleDown } from "@phosphor-icons/react/dist/ssr";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <section
        id="splash"
        className="relative shadow-md  bg-cover bg-center h-[800px] rounded-b-3xl flex flex-col  items-center text-center  py-32"
        style={{ backgroundImage: "url('splash.jpg')" }}
      >
        <h1
          className=" font-semibold  text-yellow-0 "
          // style={{ textShadow: "2px 2px 4px rgba(0, 134, 225, 0.4)" }}
          //text-transparent bg-clip-text bg-gradient-to-r from-yellow-0  via-[#fef3c7f7] to-yellow-0
        >
          Seva Charities
        </h1>
        <h3 className=" text-white font-light">
          A little love, a big difference!
        </h3>
        <CaretDoubleDown
          className="absolute  bottom-0 mb-5 text-yellow-0"
          size={32}
        />
      </section>
      <section
        id="intro"
        className="relative h-[500px] flex flex-col justify-center items-center "
      >
        <h3 className=" max-w-5xl text-center px-8 sm:px-16">
          👋 We are{" "}
          <span className=" text-orange-2 font-semibold">Seva Charities</span>,
          a student-run organization at UT Austin dedicated to fudraising for
          children worldwide and making a positive impact locally in Austin.
        </h3>
        <Image
          className="absolute top-12 left-0 sm:left-32"
          src="/bevo.svg"
          alt="bevo"
          width={150}
          height={100}
        />
        <Image
          className="absolute bottom-0 sm:bottom-20 right-0 sm:right-28"
          src="/hookem.svg"
          alt="hookem"
          width={300}
          height={300}
        />
      </section>
      <section
        id="mission"
        className="relative flex flex-col justify-start px-8 sm:px-16"
      >
        <h3 className=" text-green-1 font-light">Our Mission</h3>
        <h2 className="text-orange-2 ">
          Improve Access to Nutritious Meals for Children
        </h2>
        <h6 className="py-8">
          We partner with <span className=" font-semibold">Akshaya Patra</span>,
          an NGO in India focused on eliminating classroom hunger and supporting
          education by providing nutritious mid-day meals to children in
          government and government-aided schools.
        </h6>

        <Image
          className="flex sm:hidden "
          src="/infographic_sm.svg"
          alt="infographic"
          layout="responsive"
          width={100}
          height={100}
        />
        <Image
          className=" hidden sm:flex "
          src="/infographic_md.svg"
          alt="infographic"
          layout="responsive"
          width={100}
          height={100}
        />
        {/* <Image
          className="hidden md:flex "
          src="/infographic_lg.svg"
          alt="infographic"
          layout="responsive"
          width={100}
          height={100}
        /> */}
        <p className=" text-green-1 text-sm sm:text-lg text-center py-2">
          Learn more by visiting{" "}
          <span className=" text-orange-2 font-semibold">
            {"Akshaya Patra >"}
          </span>
        </p>
      </section>
      <section
        id="fundraised"
        className="  sm:h-64 flex flex-col py-4 sm:flex-row  justify-around items-center mt-16 bg-cover bg-[url('/fundraise_banner.svg')] text-center rounded-t-3xl"
      >
        <div>
          <h6 className="text-green-0">Last year Seva raised</h6>
          <h1 className="text-green-2 py-2">$12,758!</h1>
        </div>
        <div>
          <h6 className="text-green-0">That’s enough to feed</h6>
          <h1 className="text-green-2 py-2">638 kids</h1>
        </div>
      </section>
      <div className="bg-black">
        <section
          id="gallery"
          className="p-2 grid gap-2 grid-cols-5 md:grid-cols-10 auto-rows-[200px] md:auto-rows-[100px] grid-flow-dense "
        >
          <div className="relative col-span-2 md:col-span-2 md:row-span-2">
            <Image
              src="/gallery/1.jpg"
              alt="party "
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />{" "}
          </div>
          <div className="relative col-span-3 md:col-span-3 md:row-span-2">
            <Image
              src="/gallery/2.jpg"
              alt="seniors "
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="relative col-span-2 md:col-span-2 md:row-span-2">
            <Image
              src="/gallery/4.jpg"
              alt="tote"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className=" relative col-span-3 md:col-span-3 md:row-span-4 ">
            <Image
              src="/gallery/3.jpg"
              alt="lakehouse"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="relative col-span-3 md:col-span-4 md:row-span-2">
            <Image
              src="/gallery/5.jpg"
              alt="hike"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="relative col-span-2 row-span-1 md:col-span-3 md:row-span-2">
            <Image
              src="/gallery/6.jpg"
              alt="longhorn"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
