import type { Company } from "./schema";

export const PowerDozerInfo: Company = {
  id: "power-dozer",
  companyName: "Power Dozer Oil & Gas Solution Ltd",
  shortName: "Power Dozer",
  rcNumber: "1412339",
  established: "2017",
  contact: {
    phone: "+2348033014780",
    email: "powerdozer.oil@yahoo.com",
    address: "No. 8 NTA Road, Rumualogu, Port Harcourt, Rivers State",
    whatsapp: {
      phone: "+2348033014780",
      message: "Hello, I am interested in your services.",
    },
  },
  services: {
    procurement: {
    title: "Procurement & Supply Chain Management",
    description:
      "We source and supply high-quality equipment, spare parts and materials for industrial and oil & gas operations.",
    features: [
      "Vendor sourcing",
      "Equipment supply",
      "Import logistics",
      "Warehousing",
      "Spare parts supply",
    ],
    image: "/images/procurement.jpg",
  },
  gases: {
    title: "Industrial Gases Provision",
    description:
      "We supply industrial gases for oil & gas, medical and manufacturing industries.",
    features: [
      "Oxygen supply",
      "Nitrogen supply",
      "Argon supply",
      "Acetylene supply",
      "Gas cylinders",
    ],
    image: "/images/gases.jpg",
  },
  construction: {
    title: "Construction Material Provision",
    description:
      "We supply everything from construction materials to manpower",
    features: [
      "Construction Material",
      "Security Gadgets",
      "Electrical Materials",
      "Manpower supply",
      "Other Services",
    ],
    image: "/images/construction.jpg",
  },
},
  certifications: {
    cac: {
      name: "Corporate Affairs Commission",
      number: "RC 1412339",
      description:
        "This certificate confirms that Power Dozer Oil & Gas Solution Ltd is a legally registered company in Nigeria.",
      logo: "/images/logo2.jpg",
      certificateImage: "/images/cert2.png",
    },
    nmdpra: {
      name: "NMDPRA Service Permit",
      number: "NMDPRA/MDOGISP/25/1421948/N328726",
      description:
        "This permit allows the company to operate in the oil and gas sector providing procurement and industrial services.",
      logo: "/images/logo1.jpeg",
      certificateImage: "/images/cert1.png",
    },
    tcc: {
      name: "",
      number: "",
      description: "This certificate confirms that we are a tax paying organization",
      logo: "/images/logo3.jpeg",
      certificateImage: "",
    },
    vat: {
      name: "Value Added Tax",
      number: "",
      description:
        "This certificates allows us to be VAT collection agents",
      logo: "/images/logo3.jpeg",
      certificateImage: "",
    },
  },
  whyChooseUs: [
    {
      title: "Quality Assurance",
      description: "We offer the best and are trusted by industry leaders",
      icon: "",
    },
    {
      title: "Reliable Delivery",
      description: "We always deliver on time",
      icon: "",
    },
    {
      title: "Client Focused",
      description: "24/7 support for our clients",
      icon: "",
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices and responsible sourcing",
      icon: "",
    },
  ],
};
