import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HiOutlineCheckBadge, 
  HiOutlineLightBulb, 
  HiOutlineHeart, 
  HiOutlineShieldCheck, 
  HiOutlineClock 
} from "react-icons/hi2";
import { PageWrapper } from "../components/layout/page_wrapper";

export const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Excellence",
      text: "We are committed to delivering superior products and services that meet industry standards.",
      icon: <HiOutlineCheckBadge className="w-6 h-6" />,
    },
    {
      title: "Innovation",
      text: "We embrace new technologies and strategies to enhance operational efficiency.",
      icon: <HiOutlineLightBulb className="w-6 h-6" />,
    },
    {
      title: "Customer Focus",
      text: "We prioritize customer satisfaction by offering tailored solutions.",
      icon: <HiOutlineHeart className="w-6 h-6" />,
    },
    {
      title: "Integrity",
      text: "We uphold the highest standards of honesty, ethics and professionalism.",
      icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Efficiency",
      text: "We ensure timely and efficient service delivery to support our clients’ operations.",
      icon: <HiOutlineClock className="w-6 h-6" />,
    },
  ];

  return (
    <PageWrapper>
      <div className="bg-[#eaf0f4] min-h-screen py-20 px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Core Values
          </motion.h1>
          <p className="text-gray-600 mt-4 text-lg">Building a strong foundation for success</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Central Axis */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {values.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center w-full ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* The Strategy/Value Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 } 
                    }}
                    className="ml-12 md:ml-0 w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-sm border-l-4 border-transparent hover:border-orange-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-orange-50 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-xl text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </motion.div>

                  {/* Desktop Horizontal Connecting Line */}
                  <div 
                    className={`hidden md:block absolute top-1/2 h-0.5 transition-all duration-500 ${
                      isEven ? "right-[50%] left-[45%]" : "left-[50%] right-[45%]"
                    } ${hoveredIndex === index ? "bg-orange-400" : "bg-gray-300"}`}
                  />

                  {/* The "Light-up" Node */}
                  <div
                    className={`absolute top-1/2 left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#eaf0f4] transform -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${
                      hoveredIndex === index 
                        ? "bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)] scale-150" 
                        : "bg-gray-400"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};