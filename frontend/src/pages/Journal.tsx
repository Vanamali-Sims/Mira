/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef } from "react";

const Journal = () => {
  const [text, setText] = useState("");
  const [generatedFeedback, setGeneratedFeedback] = useState("");
  const [showGeneratedFeedback, setShowGeneratedFeedback] = useState(false);

  const textareaRef = useRef(null);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handlePrompt = () => {
    setGeneratedFeedback("This is the generated feedback"); // Replace with actual functionality
    setShowGeneratedFeedback(true);
    alert("Generating prompt..."); // Replace with actual functionality
  };

  const handleReset = () => {
    setText("");
    setGeneratedFeedback("");
    setShowGeneratedFeedback(false);
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <img
        src="src/assets/journalIntro.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute bottom-0 left-0 z-[-1]"
      />
      <img
        src="src/assets/HolisticWellnessImage.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute top-0 right-0 z-[-1]"
      />
      {!showGeneratedFeedback && (
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder="Start typing here..."
          rows={25}
          className="w-[60%] max-w-[600px] p-8 text-gray-700 bg-gray-50 border rounded-[42px] opacity-[80%] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none overflow-hidden transition-all"
          style={{ borderRadius: "42px" }}
        />
      )}

      {showGeneratedFeedback && (
        <div className="w-[60%] max-w-[600px] p-8 text-gray-700 bg-gray-50 border rounded-[42px] opacity-[80%] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none overflow-hidden transition-all">
          {generatedFeedback} {/* Replace with actual generated feedback */}
        </div>
      )}

      <div className="mt-4 flex">
        <button
          onClick={showGeneratedFeedback ? handleReset : handlePrompt}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          {showGeneratedFeedback ? "Close" : "Journal"}
        </button>
      </div>
    </div>
  );
};

export default Journal;
