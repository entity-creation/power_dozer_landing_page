import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
export const CTA = ({ data }: any) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [_, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c538fgo", // replace with your EmailJS service ID
        "template_na2wpuh", // replace with your template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "6qjkwyGcd1ulzZGmJ", // replace with your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Email sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (err) => {
          console.error("FAILED...", err);
          setSuccess("Failed to send email.");
          setLoading(false);
        },
      );
  };
  return (
    <section id="contact" className="bg-white rounded-3xl p-10 shadow-md">
      <h2 className="text-2xl font-bold mb-6">REACH OUT TO US</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="flex gap-3 items-center">
            <FaMapMarkerAlt /> {data.contact.address}
          </p>
          <p className="flex gap-3 items-center">
            <FaPhone /> {data.contact.phone}
          </p>
          <p className="flex gap-3 items-center">
            <FaEnvelope /> {data.contact.email}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full border p-3 rounded-lg"
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};
