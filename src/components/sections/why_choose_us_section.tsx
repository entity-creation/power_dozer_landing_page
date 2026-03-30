import { FaShieldAlt, FaTruck, FaUsers, FaHeadset } from "react-icons/fa";

const features = [
  { icon: FaShieldAlt, title: "Quality Commitment" },
  { icon: FaTruck, title: "Efficient Delivery" },
  { icon: FaUsers, title: "Client-Centric" },
  { icon: FaHeadset, title: "24/7 Support" },
];

export const WhyChooseUs = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      
      <div>
        <h2 className="text-3xl font-bold mb-4">
          WHY INDUSTRY LEADERS TRUST US
        </h2>
        <p className="text-gray-600">
          Built on reliability, quality, and responsiveness
        </p>
      </div>

      <div className="space-y-4">
        {features.map((f, i) => {
          const Icon = f.icon;

          return (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow-sm flex gap-4 items-center"
            >
              <Icon className="text-blue-900 text-xl" />
              <p className="font-medium">{f.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};