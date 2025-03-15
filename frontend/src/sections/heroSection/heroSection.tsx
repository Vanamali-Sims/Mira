const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-green-900 flex flex-col">

      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center relative gap-80">
        <div className="text-white p-10">
          <h2 className="text-6xl font-bold">JournAI</h2>
          <p className="mt-4 text-lg opacity-75">
            Meditate on your thoughts & unlock clarity
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-lg">
            Start Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-100 h-100 bg-[#f8603f] rounded-full"></div>
          <img
            src="./src/assets/heroImage.svg"
            alt="Hero"
            className="relative z-10 w-64 h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
