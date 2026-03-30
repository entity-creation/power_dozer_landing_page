import { FaPhone, FaEnvelope } from "react-icons/fa";

import type { Company } from "../../data/schema";
import { Button } from "../ui/button";
interface HeroProps {
  data: Company;
}
export const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative rounded-3xl overflow-hidden mx-4 mt-4">
      <img
        src="/images/shipment.jpg"
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            POWER DOZER <br /> OIL & GAS SOLUTION LTD
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            NMDPRA Certified | RC: {data.rcNumber}
          </p>

          <p className="mt-6 text-xl max-w-xl">
            Your Complete Procurement & Gas Solutions Partner
          </p>

          <p className="mt-2 text-gray-300 max-w-xl">
            From drilling materials to industrial gases—delivering certified quality,
            24/7 support, and seamless vendor integration.
          </p>

          <div className="mt-6 flex gap-4">
            <Button>
              <FaPhone /> Call Now
            </Button>
            <Button variant="secondary">
              <FaEnvelope /> Email Us
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Trusted by industry leaders across Nigeria
          </p>
        </div>
      </div>
    </section>
  );
};