

export type Company = {
    id: string;
    companyName: string;
    shortName: string;
    rcNumber: string;
    established: string;
    contact: Contact;
    services: Record<string, Service>;
    certifications: Record<string, Certification>;
    whyChooseUs: WhyChooseUs[];
}

export type Contact = {
    phone: string;
    email: string;
    address: string;
    whatsapp: WhatsAppContact;
}

export type WhatsAppContact = {
    phone: string;
    message: string;
}

export type Service = {
    title: string;
    description: string;
    features: string[];
    image: string;
}

export type Certification = {
    name: string;
    number: string;
    description: string;
    logo: string;
    certificateImage: string;
}

export type WhyChooseUs = {
    title: string;
    description: string;
    icon: any;
}