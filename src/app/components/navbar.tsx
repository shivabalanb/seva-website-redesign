"use client";
import { List } from "@phosphor-icons/react/dist/ssr";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [showScreen, setShowScreen] = useState<boolean>(false);
  const navLinks = [
    "home",
    "officers",
    "seva history",
    "general meetings",
    "merch",
    "linktree",
    "contact us",
  ];

  const [bgColor, setBgColor] = useState(
    pathname == "/" ? "transparent" : "bg-orange-2"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setBgColor("bg-orange-2"); // Change color as desired
      } else {
        setBgColor("transparent");
      }
    };

    setBgColor("bg-orange-2");
    if (pathname == "/") {
      setBgColor("transparent");
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`max-w-screen-xl mx-auto fixed top-0 z-50 inset-x-0  flex px-16 py-4 justify-between items-center   ${bgColor}`}
      >
        <div className=" flex items-center">
          <Image src="/seva_logo.png" alt="seva logo" width={42} height={42} />
          <div className=" pl-2 text-white font-semibold text-3xl">
            Seva Charities
          </div>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setShowScreen(!showScreen)}
        >
          <List size={32} color="white" weight="bold" />
        </button>
      </div>
      {showScreen && (
        <div className="bg-orange-2 fixed inset-0 z-40 flex flex-col gap-4 justify-center items-center">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={`${getRoute(link)}`}
                onClick={() => setShowScreen(!showScreen)}
              >
                <button
                  className={` hover:text-[#74ee15] ${
                    getRoute(link) == pathname
                      ? "text-white text-4xl"
                      : "text-yellow-0"
                  } text-3xl`}
                >
                  {link}
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

function getRoute(link: String): String {
  if (link == "home") return "/";
  return "/" + link.replace(/ /g, "-");
}
