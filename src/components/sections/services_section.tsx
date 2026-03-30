import { FaTools, FaIndustry, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import type { Company } from "../../data/schema";

const icons = [FaTools, FaIndustry, FaCogs];
export const Services = ( {data} : any) => {
  const navigate = useNavigate();
  return (
    <section id="services" className="bg-white rounded-3xl p-10 shadow-md">
      <h2 className="text-2xl font-bold mb-2">
        OUR COMPREHENSIVE SERVICES
      </h2>
      <p className="text-gray-500 mb-8">
        One source for all your operational needs
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(data.services).map((key: any, i: number) => {
          const Icon = icons[i % icons.length];
          const service = data.services[key];

          return (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-md transition"
              onClick={() => navigate(`/services/${key}`)}
            >
              <Icon className="text-orange-600 text-2xl mb-4" />
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};