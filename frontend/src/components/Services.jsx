import {
  FaRegClock,
  FaWallet,
  FaNetworkWired,
  FaBookOpen,
} from "react-icons/fa";
import Testimonial from "./Testimonial";

export default function Services() {
  const advantages = [
    {
      icon: <FaRegClock className="text-yellow-400 text-4xl" />,
      title: "Save Time",
      description: "No More Switching For Packages Or Plans.",
    },
    {
      icon: <FaWallet className="text-yellow-400 text-4xl" />,
      title: "Save Money",
      description: "Compare, Negotiate, And Choose The Best.",
    },
    {
      icon: <FaNetworkWired className="text-yellow-400 text-4xl" />,
      title: "Trusted Network",
      description: "A Trusted Network Of 7000+ Travel Agents",
    },
    {
      icon: <FaBookOpen className="text-yellow-400 text-4xl" />,
      title: "Multiple Options",
      description: "Itineraries & Travel Tips From Trusted Agents",
    },
  ];

  return (
    <>
      <section className="bg-[#74c7c9] py-16 px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-2">Our Advantages</h2>
        <p className="text-white mb-10">
          You can rely on our experience and the quality of services we provide.{" "}
          <br />
          Here are other reasons to book tours at Treat Holidays
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 bg-[#b5e0e1] rounded-xl px-6 py-8 shadow-md hover:scale-105 transition-all duration-200"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow">
                {item.icon}
              </div>
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonial />
    </>
  );
}
