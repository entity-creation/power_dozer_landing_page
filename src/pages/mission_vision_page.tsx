import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page_wrapper";
import { useNavigate } from "react-router";

export const MissionVision = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="bg-[#eaf0f4] min-h-screen pt-4">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center mx-4 rounded-3xl text-white"
          style={{
            backgroundImage: "url('/images/missionVision.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Mission & Vision</h1>
            <button
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              onClick={() => navigate("/#contact")}
            >
              Contact Us
            </button>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            src="/images/mission.jpg"
            className="rounded-3xl"
          />

          <motion.div initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to deliver reliable procurement, industrial
              support, and gas supply services while maintaining the highest
              standards of safety, professionalism, and innovation.
            </p>
          </motion.div>
        </section>

        {/* Vision Section (Reversed Layout) */}
        <section className="max-w-6xl mx-auto pb-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become a leading indigenous oil and gas support services
              company recognized for innovation, reliability, and sustainable
              growth across Africa.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            src="/images/ecoVision.jpg"
            className="rounded-3xl"
          />
        </section>
      </div>
    </PageWrapper>
  );
};
