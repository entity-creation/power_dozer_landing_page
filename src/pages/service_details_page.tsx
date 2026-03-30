import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/layout/page_wrapper";
import { motion } from "framer-motion";
import { PowerDozerInfo } from "../data/company";

const servicesData = PowerDozerInfo.services;

export const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData[id as string];

  if (!service) return <div>Service not found</div>;

  return (
    <PageWrapper>
        <div className="bg-[#eaf0f4] min-h-screen py-10">
        <div className="max-w-6xl mx-auto space-y-10">

        {/* Hero */}
         <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-10 shadow-md"
          >
            <h1 className="text-3xl font-bold">
              {service.title}
            </h1>
            <p className="text-gray-600 mt-2">
              {service.description}
            </p>
          </motion.div>

        {/* Image + Features */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              src={service.image}
              className="rounded-3xl h-100"
            />

          <div>
            <h2 className="text-xl font-bold mb-4">What We Offer</h2>
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 text-gray-600"
            >
              {service.features.map((f: string, i: number) => (
                <li key={i}>✔ {f}</li>
              ))}
            </motion.ul>
          </div>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
};