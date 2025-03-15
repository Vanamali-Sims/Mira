import {
  FaSearch,
  FaClipboardCheck,
  FaUserCircle,
  FaUsers,
  FaMobileAlt,
  FaUnlock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSearch className="text-green-600 text-4xl" />,
    title: "About JournaAI",
    subtitle: "Our Mission",
    description:
      "At the heart of JournaAI lies a belief that self-awareness and emotional intelligence are key to unlocking your full potential.",
  },
  {
    icon: <FaClipboardCheck className="text-green-600 text-4xl" />,
    title: "How it Works",
    subtitle: "Your Daily Check-In",
    description:
      "Each day, spend a few moments reflecting on your mood, thoughts, and feelings.",
  },
  {
    icon: <FaUserCircle className="text-red-600 text-4xl" />,
    title: "Discover Yourself",
    subtitle: "",
    description:
      "Through the practice of daily journaling and our AI’s personalized feedback, gain deeper insights into your emotions, thought patterns, and behavioral tendencies.",
  },
  {
    icon: <FaUsers className="text-green-600 text-4xl" />,
    title: "Join the Community",
    subtitle: "Connect with others",
    description:
      "Share your journey, seek support, and find inspiration in our vibrant community of JournaAI users.",
  },
  {
    icon: <FaMobileAlt className="text-red-600 text-4xl" />,
    title: "Explore the App",
    subtitle: "Download Now",
    description:
      "Available on iOS and Android, the JournaAI app seamlessly integrates into your daily routine. Capture your thoughts, receive personalized insights.",
  },
  {
    icon: <FaUnlock className="text-red-600 text-4xl" />,
    title: "Unlock Your Potential",
    subtitle: "",
    description:
      "Join the waitlist now to be among the first to experience the transformative power of JournaAI.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-red-50 py-16 px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to JournaAI</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Unlock the power of AI-driven self-reflection. Our platform offers a
        seamless daily check-in experience where you can record your moods, and
        our fine-tuned AI provides personalized insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="absolute top-[-22px] rounded-lg bg-green">
              <div className="mb-4">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-red-500 font-medium mt-1">{feature.subtitle}</p>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FeaturesSection };
