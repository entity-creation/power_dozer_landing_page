import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components/layout/page_wrapper";
import { PowerDozerInfo } from "../data/company";

const certifications = PowerDozerInfo.certifications;

export const CertificationDetails = () => {
  const { id } = useParams();
  const cert = certifications[id as string];

  if (!cert) return <div>Certificate not found</div>;

  return (
    <PageWrapper>
      <div className="bg-[#eaf0f4] min-h-screen py-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <div className="flex items-center gap-4">
              <img src={cert.logo} className="w-16 h-16 object-contain" />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-10 shadow-md"
              >
                <h1 className="text-2xl font-bold">{cert.name}</h1>
                <p className="text-gray-500">{cert.number}</p>
              </motion.div>
            </div>
            <p className="text-gray-600 mt-6">{cert.description}</p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h2 className="text-xl font-bold mb-4">Certificate</h2>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.2 }}
              src={cert.certificateImage}
              className="rounded-3xl shadow-md"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
