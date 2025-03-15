import { useNavigate } from "react-router-dom";

const MindfulMoments = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-6">
      <div
        className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-10"
        style={{ width: "fit-content" }}
      >
        <p className="text-sm text-rose-500 font-semibold">Mindful Moments</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Mira (Latin)</h1>
        <p className="text-gray-600 mt-4 max-w-lg">
          "Wonderful" or "Admirable" - evoking a sense of awe and appreciation
          for life's simple joys.
        </p>
        <button
          className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full"
          onClick={() => navigate("/journal")}
        >
          Try It Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="src/assets/mindfulMomentsImage.svg"
          alt="Mindful Moments"
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export { MindfulMoments };
