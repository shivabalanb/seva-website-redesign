import Image from "next/image";
import SevaHistoryGallery from "../components/SevaHistoryGallery";
import Carousel from "../components/Carousel";

const SevaHistory = () => {
  return (
    <div className="mb-32">
      <div className="z-50 mt-24 flex flew-wrap flex-col justify-center items-center">
        <Carousel />
        <h1 className="px-8 text-green-0 font-semibold my-12">Seva History</h1>
        <div className="px-8 text-start  md:px-36 lg:text-center mb-44">
          <p>
            Family is an integral part of Seva, as it embodies the values of{" "}
            <span className="text-orange-1 font-semibold">
              love, compassion, and service.
            </span>{" "}
            We practice the act of selfless service, which represents the
            foundation of Seva. Our family and friends are shaped by both the
            history and future of Seva.
          </p>
          <p className="mt-4">
            Our work for Akshaya Patra would never be possible without the{" "}
            <span className="text-orange-1 font-semibold">family</span> within
            Seva Charities.
          </p>
        </div>
        <SevaHistoryGallery />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-0 to-transparent z-[-1]"></div>
    </div>
  );
};

export default SevaHistory;
