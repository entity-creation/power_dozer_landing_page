import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import type { Company } from "../../data/schema";

interface FooterProps {
  data: Company;
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold">{data.companyName}</h2>
          <p className="mt-3 text-gray-300">
            Your trusted procurement and gas solutions partner.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2">
            <FaPhone /> {data.contact.phone}
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> {data.contact.email}
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> {data.contact.address}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <a href={`tel:${data.contact.phone}`} className="block hover:underline">
            Call Now
          </a>
          <a href={`mailto:${data.contact.email}`} className="block hover:underline mt-2">
            Send Email
          </a>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} {data.companyName}. All rights reserved.
      </div>
    </footer>
  );
};