/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { QuestForm } from "../containers/QuestsPageContainer";
import { CgAlignLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Quests: React.FC = () => {

  const navigate = useNavigate();
  const [quest, setQuest] = useState<string>("");
  const [formData, setFormData] = useState({
    age: "",
    international: "",
    personality: "",
    questType: "",
  });

  const handleSubmit = (data: any) => {
    console.info("Form Submitted", data);
    console.info("call api and set response in quest");
    setQuest("response from api");
  };

  return (
    <div className="flex flex-1 justify-center items-center text-center p-5">
      <img
        src="src/assets/mindfullnessSectionImage.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute bottom-0 left-0 z-[-1]"
      />
      <img
        src="src/assets/journalIntro.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute top-0 right-0 z-[-1]"
      />
      {!quest && (
        <QuestForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {quest && (
        <div className="flex flex-col gap-3 justify-center items-start h-full">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center border-2 border-[#f4ece3] relative">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Quest</h1>
              <CgAlignLeft className="text-2xl" />
            </div>
            <p>{quest}</p>
          </div>
          <div className="flex w-full gap-3 justify-between">
            <button
              className="w-auto bg-[#cb493d] text-white p-3 rounded-xl text-sm font-semibold shadow-lg hover:bg-[#cb493d] transition transform hover:scale-105"
              onClick={() => handleSubmit(formData)}
            >
              Regenerate Quest
            </button>
            <button
              className="w-auto bg-green-700 text-white p-3 rounded-xl text-sm font-semibold shadow-lg hover:bg-green-600 transition transform hover:scale-105"
              onClick={() => navigate("/rewards")}
            >
              Mark as Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quests;
