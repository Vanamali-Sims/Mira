import React from "react";
import { BusinessPortalForm } from "../containers/BusinessPortalPageContainers/businessPortalForm";

const BusinessPortal: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
      {/* Background Images */}
      <img
        src="src/assets/mindfullnessSectionImage.svg"
        alt="Background Left"
        className="w-80 h-auto absolute bottom-10 left-10 opacity-80"
      />
      <img
          src="src/assets/mindfulMomentsImage.svg"
          alt="Mindful Moments"
          className="w-96 h-auto absolute top-0 right-0 z-[-1]"
        />
      <div className="opacity-[80%]">
        <h1 className="text-3xl font-bold mb-4">
          welcome to the business portal
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your one-stop solution for managing your business needs.
        </p>

        {/* Feature Button */}
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 transition-all"
          onClick={() => alert("Feature coming soon!")}
        >
          Explore Features
        </button>
      </div>

      {/* Business Form Section */}
      <div className="mt-8 w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <BusinessPortalForm />
      </div>
    </div>
  );
};

export default BusinessPortal;
