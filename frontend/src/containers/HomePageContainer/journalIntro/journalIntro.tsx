import { useNavigate } from "react-router-dom";

const JournalIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 p-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="src/assets/journalIntro.svg"
          alt="Holistic Wellness"
          className="w-96 h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-10">
        <p className="text-sm text-rose-500 font-semibold">
          Empowering Your Well-Being
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          मीरा (Sanskrit: Mīrā)
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg">
          Meaning: "Ocean" or "Sea" - symbolizing vastness and depth, reflecting
          the expansive nature of our inner world.
        </p>
        <button
          className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full"
          onClick={() => navigate("/journal")}
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export { JournalIntro };
