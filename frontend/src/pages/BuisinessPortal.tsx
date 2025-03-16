import React from "react";
import { BusinessPortalForm } from "../containers/BusinessPortalPageContainers/businessPortalForm";

const BusinessPortal: React.FC = () => {
  return (
    <div className="text-center p-5">
      <img
        src="src/assets/mindfullnessSectionImage.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute bottom-0 left-0 z-[-1]"
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
        <p className="text-lg mb-6">
          Your one-stop solution for managing your business needs.
        </p>
        <button
          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => alert("Feature coming soon!")}
        >
          Explore Features
        </button>
      </div>
      <BusinessPortalForm />
    </div>
  );
};

export default BusinessPortal;
