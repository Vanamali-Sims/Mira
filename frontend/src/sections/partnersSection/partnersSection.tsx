const partners = [
  {
    name: "Shell",
    tagline: "Fuel your journey",
    description:
      "Shell, a trusted global energy provider, is proud to partner with JournaAI in supporting your personal and professional growth.",
    icon: (
      <img src="./src/assets/shell.svg" height={35} width={35} alt="shell" />
    ),
  },
  {
    name: "Microsoft",
    tagline: "Empower your growth",
    description:
      "Microsoft, the leading technology company, is thrilled to collaborate with JournaAI in providing tools and resources to empower your personal development.",
    icon: (
      <img
        src="./src/assets/microsoft.svg"
        height={30}
        width={30}
        alt="microsoft"
      />
    ),
  },
  {
    name: "Apple",
    tagline: "Innovate with us",
    description:
      "Apple, the innovative tech giant, is proud to partner with JournaAI in offering a seamless and empowering journaling experience.",
    icon: (
      <img src="./src/assets/apple.svg" height={30} width={30} alt="apple" />
    ),
  },
  {
    name: "Ferrari",
    tagline: "Drive your self-discovery",
    description:
      "Ferrari, the iconic Italian luxury sports car brand, is excited to join forces with JournaAI to fuel your journey of self-reflection.",
    icon: (
      <img src="./src/assets/ferrari.svg" height={35} width={35} alt="ferrari" />
    ),
  },
  {
    name: "Google",
    tagline: "Grow with us",
    description:
      "Google, the search engine and technology powerhouse, is excited to join forces with JournaAI to support your personal growth.",
    icon: (
      <img src="./src/assets/google.svg" height={35} width={35} alt="google" />
    ),
  },
];

const PartnersSection = () => {
  return (
    <div className="bg-red-50 py-8 px-8 text-center">
      <div className="bg-gray-50 py-16 mt-16">
        <h2 className="text-4xl font-bold text-gray-800">Partner with Us</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Interested in collaborating with JournaAI? We’re always seeking
          like-minded organizations and individuals who share our vision of
          empowering personal growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="absolute top-[-22px] rounded-lg bg-green">
                <div className="mb-4">{partner.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-red-500 font-medium mt-1">{partner.tagline}</p>
              <p className="text-gray-600 mt-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { PartnersSection };
