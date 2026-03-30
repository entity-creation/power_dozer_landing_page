import { PageWrapper } from "../components/layout/page_wrapper";

export const AboutSummary = () => {
  return (
    <PageWrapper>
      <div className="bg-[#eaf0f4] min-h-screen pt-4">

        {/* Hero Section */}
        <section
          className="relative h-[60vh] flex items-center justify-center text-white mx-4 rounded-3xl"
          style={{
            backgroundImage: "url('/images/aboutUs.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50  rounded-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              ABOUT OUR COMPANY
            </h1>
            <p className="text-lg">
              Enhancing Your Business with Expertise, Innovation and Reliable Solutions.
            </p>
          </div>
        </section>

        {/* About Text Section */}
        <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
          <img src="/images/about.jpg" className="rounded-3xl" />

          <div className="text-gray-700 leading-7">
            <p className="mb-4">
              Power Dozer Oil and Gas Solution Limited is a premier indigenous company dedicated
              to delivering top-tier services in instrumentation, procurement, industrial support
              services, and supply of gases such as industrial, diving and welding consumables.
            </p>

            <p className="mb-4">
              We promote inclusive growth and economic sustainability to the oil and gas,
              construction, and energy sectors.
            </p>

            <p>
              Over the years, we have built a reputation for reliability, quality, and
              responsiveness. Our growth has been steady, organic, and value-driven and will
              remain focused on expanding our impact while staying true to our core values.
            </p>
          </div>
        </section>

      </div>
    </PageWrapper>
  );
};