/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const rewards = [
  {
    id: 1,
    title: "Exclusive Discount",
    description: "Get 20% off on your next purchase.",
    code: "SAVE20",
    image: "src/assets/rewardsImage1.jpg",
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Enjoy free shipping on orders above $50.",
    code: "FREESHIP",
    image: "src/assets/rewardsImage2.jpg",
  },
  {
    id: 3,
    title: "Bonus Points",
    description: "Earn 500 bonus points for your next redemption.",
    code: "BONUS500",
    image: "src/assets/rewardsImage1.jpg",
  },
];

const Rewards = () => {
  const navigate = useNavigate();

  const handleClaim = (code: string) => {
    navigate("/");
    window.open(
      `https://www.canva.com/design/DAGh2lfUTTg/EYP1-A03C13nKfpYsUZImw/edit?utm_content=DAGh2lfUTTg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`,
      "_blank"
    );
  };

  return (
    <div className="max-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg relative">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Choose your rewards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="relative bg-cover bg-center rounded-lg shadow-md overflow-hidden h-48 flex items-end p-4"
              style={{ backgroundImage: `url(${reward.image})` }}
            >
              <div className="bg-[#ffffff69] p-4 w-full rounded-lg">
                <h2 className="text-lg font-bold">{reward.title}</h2>
                <p className="text-gray-700 mb-2">{reward.description}</p>
                <button
                  onClick={() => handleClaim(reward.code)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
                >
                  Claim Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
