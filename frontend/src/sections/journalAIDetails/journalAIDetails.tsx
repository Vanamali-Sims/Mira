const JournalAIDetails = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800 leading-snug">
            Discover the Power <br /> of Journaling
          </h1>
          <p className="mt-4 text-gray-600">
            Embark on a transformative journey with Journal AI – your personal
            companion for self-exploration, goal-setting, and positive growth.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#FF7A00] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e66a00]">
              Start Journaling
            </button>
            <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100">
              Join Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img
              src="src/assets/journalAIDetailsImage.svg" // Replace with actual image path
              alt="Journal AI Details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { JournalAIDetails };
