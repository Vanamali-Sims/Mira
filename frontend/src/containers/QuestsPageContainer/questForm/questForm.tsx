/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

interface QuestFormProps {
  handleSubmit?: (e: any) => void;
  formData?: any;
  setFormData?: any;
}

const QuestForm: FC<QuestFormProps> = ({
  handleSubmit = () => {},
  formData = {},
  setFormData = () => {},
}) => {
  // const [formData, setFormData] = useState({
  //   age: "",
  //   international: "",
  //   personality: "",
  //   questType: "",
  // });

  const personalityTypes = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
  ];

  const questTypes = [
    "Rain",
    "Earth",
    "Flame",
    "Sky",
    "Valley",
    "River",
    "Leaf",
    "Star",
    "Stone",
    "Cloud",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center border-2 border-[#f4ece3] relative opacity-80">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          🎯 Enter Details to Generate a Quest
        </h2>
        <form onSubmit={() => handleSubmit(formData)} className="space-y-6">
          <div>
            <label className="block text-left font-semibold text-green-800">
              Personality Type:
            </label>
            <select
              name="personality"
              value={formData.personality}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg shadow-sm max-h-48 overflow-auto  focus:outline-none focus:ring-2"
            >
              <option value="">Select</option>
              {personalityTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-left font-semibold text-green-800">
              Quest Type:
            </label>
            <select
              name="questType"
              value={formData.questType}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg shadow-sm max-h-48 overflow-auto  focus:outline-none focus:ring-2"
            >
              <option value="">Select</option>
              {questTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-left font-semibold text-green-800">
              Age:
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block text-left font-semibold text-green-800">
              International Student:
            </label>
            <div className="flex space-x-6 justify-center">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="international"
                  value="yes"
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="international"
                  value="no"
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            Generate Quest
          </button>
        </form>
        <div className="absolute -top-4 right-4 text-green-500 text-3xl">
          ✨
        </div>
      </div>
    </div>
  );
};

export { QuestForm };
