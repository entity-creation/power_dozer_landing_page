export const SocialProof = () => {
  const images = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
    "/images/client7.png",
    "/images/client8.png",
    "/images/client9.jpeg",
  ];
  return (
    <section
      id="clients"
      className="bg-white rounded-3xl p-10 shadow-md overflow-hidden"
    >
      <h2 className="text-2xl font-bold mb-6">TRUSTED BY INDUSTRY LEADERS</h2>

      <div className="flex gap-6 animate-marquee">
        {images.map((image, i) => (
          <div
            key={i}
            className="w-40 h-20 rounded-xl flex items-center justify-center bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </section>
  );
};
