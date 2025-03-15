const CommitmentToWellness = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 text-center">
      <p className="text-sm text-rose-400 font-semibold">About Our Mission</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">Our Commitment to Wellness</h1>
      <div className="flex items-center justify-between w-full max-w-4xl mt-6">
        <p className="text-lg font-semibold text-gray-700">Unlock Your Potential</p>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-700 font-bold">
            adc
          </div>
          <button className="bg-green-700 text-white px-6 py-2 rounded-full">
            Claim Your Rewards
          </button>
        </div>
      </div>
    </div>
  );
}

export { CommitmentToWellness };