
const ProgressTracker = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center mb-10">
        <p className="text-sm text-rose-500 font-semibold">Meaningful Milestones</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Track Your Progress</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Celebrate your achievements with our minimalistic gamification features. Unlock
          badges, streaks, and more!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <div className="w-24 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Earn Rewards</h2>
          <p className="text-gray-600 text-center mt-2">
            Climb the mindfulness ladder: Advance through levels and unlock exclusive benefits.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Unlock Rewards</h2>
          <p className="text-gray-600 text-center mt-2">
            Advance through mindfulness levels and gain new achievements.
          </p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Reach New Heights</h2>
          <p className="text-center mt-2">
            Conquer challenges, overcome obstacles, and achieve your personal goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export { ProgressTracker };
