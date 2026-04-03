import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Credibility = () => {
   const navigate = useNavigate();

  const certifications = [
  {
    id: "cac",
    name: "Corporate Affairs Commission",
    short: "RC: 1412339",
    description: "Company incorporation certificate",
  },
  {
    id: "nmdpra",
    name: "NMDPRA Service Permit",
    short: "NMDPRA/MDOGISP/25/1421948/N328726",
    description: "Permit to operate in oil and gas sector",
  },
  {
    id: "tcc",
    name: "TAX Clearance Certificate",
    short: "",
    description: "Certificate for tax payment",
  },
  {
    id: "vat",
    name: "Registration as VAT collection agent",
    short: "",
    description: "VAT Collection agent",
  },

];

   return (
    <section className="bg-white rounded-3xl p-10 shadow-md" id="certifications">
     <h2 className="text-2xl font-bold mb-2">REGISTERED & CERTIFIED</h2>
      <p className="text-gray-500 mb-6">
        We're fully compliant with all regulatory requirements
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => navigate(`/certifications/${cert.id}`)}
            className="cursor-pointer flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:shadow-md transition"
          >
            <FaCheckCircle className="text-green-600 mt-1" />
            <div>
              <p className="text-gray-700 font-medium">{cert.name}</p>
              <p className="text-sm text-gray-500">{cert.short}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm italic text-gray-500">
        Our commitment: "Right first time" quality culture
      </p>
    </section>
  );
};