import { Footer } from "../components/layout/footer";
import Header from "../components/layout/header";
import { About } from "../components/sections/about_section";
import { Credibility } from "../components/sections/credibility_section";
import { CTA } from "../components/sections/cta_section";
import { Hero } from "../components/sections/hero_section";
import { Services } from "../components/sections/services_section";
import { SocialProof } from "../components/sections/social_proof_section";
import { WhyChooseUs } from "../components/sections/why_choose_us_section";
import { StickyBar } from "../components/ui/sticky_bar";
import { PowerDozerInfo } from "../data/company";

export const PowerDozerLanding = () => {
  return (
    <>
      <Header />
      <div className="bg-[#eaf0f4] pt-4"><Hero data={PowerDozerInfo} /></div>
      <div className="bg-[#eaf0f4] min-h-screen pt-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <Credibility />
          <Services data={PowerDozerInfo} />
          <WhyChooseUs />
          <About />
          <SocialProof />
          <CTA data={PowerDozerInfo} />
        </div>
        <Footer data={PowerDozerInfo} />
        <StickyBar
          phone={PowerDozerInfo.contact.phone}
          email={PowerDozerInfo.contact.email}
          whatsapp={{
            phone: PowerDozerInfo.contact.phone,
            message: "Hello, I am intersted in your services",
          }}
        />
      </div>
    </>
  );
};
