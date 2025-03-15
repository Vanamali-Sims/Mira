import { useNavigate } from "react-router-dom";

const HeroSection2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcf4ec] min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 lg:px-12 py-16 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800">
            Welcome to <span className="text-[#FF7A00]">Journal AI</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Unlock Your Potential with Journal AI - Personalized Journaling,
            Goal Setting.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800">
              Get Started
            </button>
            <button className="text-gray-700 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              Explore Features
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="src/assets/heroImage2.svg"
            alt="Journal AI Mockup"
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl px-6 lg:px-12 py-10 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: (
              <img
                src={"src/assets/heroImage2.svg"}
                alt={"Quests"}
                className=""
              />
            ),
            name: "Quests",
            text: "Embark on simple yet powerful quests designed to boost your well-being, nurture nature, and uplift your surroundings. Small actions, big impact—complete daily challenges and grow into your best self while making the world a better place! 🌱✨",
            link: "/quests",
          },
          {
            icon: (
              <img
                src={"src/assets/heroImage2.svg"}
                alt={"Journal"}
                className=""
              />
            ),
            name: "AI Journal",
            text: "Share your thoughts, worries, or emotions, and let AI craft an uplifting message just for you. Whether you're seeking clarity, comfort, or motivation, Journal AI is here to support your journey toward a more positive and mindful you. ✨📖💙",
            link: "/journal",
          },
          {
            icon: (
              <img
                src={"src/assets/heroImage2.svg"}
                alt={"Rewards"}
                className=""
              />
            ),
            name: "Rewards",
            text: "Complete quests, make a difference, and unlock exciting rewards! Every step you take towards self-improvement and well-being brings you closer to exclusive perks. Stay motivated, stay inspired—your journey deserves to be celebrated! 🌟💡",
            link: "/rewards",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl text-center"
            onClick={() => navigate(item.link)}
          >
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export { HeroSection2 };
