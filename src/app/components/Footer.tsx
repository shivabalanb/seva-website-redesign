import { InstagramLogo, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const contacts = [
  {
    icon: <InstagramLogo size={32} />,
    name: "sevacharities@gmail.com",
    link: "mailto:sevacharities@gmail.com",
  },
  {
    icon: <Envelope size={32} />,
    name: "@sevacharities",
    link: "https://www.instagram.com/sevacharities/",
  },
  { icon: <Phone size={32} />, name: "+1 (234) 567 8910" },
];

export default function Footer() {
  return (
    <section id="contact-us" className=" bg-green-0 p-16 mt-32">
      <div className="flex flex-wrap justify-center gap-4 text-center">
        <h6>
          <span className=" bg-white text-black px-2 font-semibold">
            Join Seva!
          </span>{" "}
          We truly do believe in the power of giving and that college students,
          if passionate enough, can make a difference!
        </h6>
        <div className="  flex justify-center ">
          <button className="bg-green-500 hover:bg-green-400 hover:text-black text-white font-semibold py-4 px-4  border-b-4 border-green-700 hover:border-green-500 rounded-xl">
            <p>👳‍♂️ Become a Member</p>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mt-16  md:justify-between items-center gap-4">
        <div className="text-center">
          <h2>Contact Us</h2>
          <p className=" text-green-1">Want to collaborate with us?</p>
        </div>
        <Image
          src="/seva_logo_green.svg"
          alt="seva charities"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-4">
          {contacts.map((i, index) => (
            <div key={index} className="flex items-center gap-2">
              {i.icon}
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
