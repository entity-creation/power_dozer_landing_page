export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">OUR CORE VALUES</h2>
          <ul className="space-y-3 text-gray-600">
            <li>Quality Excellence</li>
            <li>Timely Delivery</li>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">OUR STRATEGIC APPROACH</h2>
          <ul className="space-y-3 text-gray-600">
            <li>Client-Centric Approach</li>
            <li>Partnership & Collaboration</li>
            <li>Capacity Building</li>
            <li>Sustainability Focus</li>
          </ul>
        </div>
      </div>
      {/* <div className="text-center mt-8 flex items-center  justify-center">
          <button
            onClick={() => {
              setExpanded(!expanded)
              navigate("/mission_vision");
            }}
            className="text-orange-600 font-semibold"
          >
            {expanded ? "Show Less" : "Learn More About Us"}
          </button>
        </div> */}
    </section>
  );
};