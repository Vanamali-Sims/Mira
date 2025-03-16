import React, { useState } from "react";

const BusinessPortalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    serviceOffered: "",
    couponCount: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! Feature coming soon.");
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-lg border border-gray-200 rounded-xl p-8">
      {/* Form Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Register Your Business
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Organization Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Organization Name
          </label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter your organization name"
          />
        </div>

        {/* Organization Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Organization Type
          </label>
          <select
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Type</option>
            <option value="ngo">NGO</option>
            <option value="corporate">Corporate</option>
            <option value="startup">Startup</option>
            <option value="non-profit">Non-Profit</option>
          </select>
        </div>

        {/* Service Offered */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Service Offered
          </label>
          <input
            type="text"
            name="serviceOffered"
            value={formData.serviceOffered}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter your service"
          />
        </div>

        {/* Count of Coupons */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Count of Coupons
          </label>
          <input
            type="number"
            name="couponCount"
            value={formData.couponCount}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter number of coupons"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
            placeholder="Briefly describe your business"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessPortalForm;
