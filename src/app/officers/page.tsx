import Card, { OfficerProps } from "../components/Card";

const officers: OfficerProps[] = [
  { name: "Diya Ballal", role: "President", bio: "I'm Seva Prez" },
  {
    name: "Sarvesh Raghuraman",
    role: "VP Engagement and Comms",
    bio: "I'm Seva VP",
  },
  {
    name: "Anvita Bhatt",
    role: "VP Events and Philanthropy",
    bio: "I'm Seva VP",
  },
];

export default function Officers() {
  return (
    <div className=" mt-24 flex flew-wrap flex-col justify-center items-center">
      <h1 className="px-8 text-orange-2 font-semibold my-12 text-center ">
        Meet The Officers
      </h1>
      <div className="px-8 lg:px-16  flex flex-wrap gap-4 justify-center">
        {officers.map((officer, index) => (
          <Card key={index} info={officer} />
        ))}
      </div>
    </div>
  );
}
