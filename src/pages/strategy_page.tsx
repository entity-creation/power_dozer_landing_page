import { useState } from "react";
import { motion} from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineHand,
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { PageWrapper } from "../components/layout/page_wrapper";

export const Strategy = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const strategies = [
    {
      title: "Client Centric Approach",
      text: "We build services around client needs, providing tailor-made solutions.",
      icon: <HiOutlineUserGroup className="w-6 h-6" />,
    },
    {
      title: "Partnership and Collaboration",
      text: "We engage in strategic partnerships with other service industries.",
      icon: <HiOutlineHand className="w-6 h-6" />,
    },
    {
      title: "Capacity Building and Training",
      text: "We prioritize education, mentorship, and staff training.",
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
    },
    {
      title: "Sustainability and Impact Focus",
      text: "We embed sustainability in every service.",
      icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
    },
  ];

  return (
    <PageWrapper>
      <div className="bg-[#eaf0f4] min-h-screen py-20 px-4 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Strategy
          </motion.h1>
          <p className="text-gray-600 mt-4 text-lg">
            Making a change one step at a time
          </p>
        </div>
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {strategies.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-between w-full ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* 1. The Strategy Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="ml-12 md:ml-0 w-full md:w-[42%] bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-orange-500/30 transition-colors cursor-default"
                  >
                    <div className="text-orange-500 mb-3">{item.icon}</div>
                    <h3 className="font-bold text-xl mb-2 text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </motion.div>

                  {/* 2. Horizontal Connector Line (Desktop Only) */}
                  <div
                    className={`hidden md:block absolute top-1/2 h-0.5 bg-gray-300 transition-colors duration-300 ${
                      isEven
                        ? "right-[50%] left-[42%]"
                        : "left-[50%] right-[42%]"
                    } ${hoveredIndex === index ? "bg-orange-400" : "bg-gray-300"}`}
                  />

                  {/* 3. The Glow Circle (Node) */}
                  <div
                    className={`absolute top-1/2 left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#eaf0f4] transform -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] scale-125"
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
