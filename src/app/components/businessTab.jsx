"use client";

import { useState } from "react";

export default function BusinessTab({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("Business Growth");

  const tabs = ["Business Growth", "Our Expertise", "Client Success"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-full bg-transparent max-w-4xl">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 py-[3rem] px-4 md:px-[4rem] text-sm md:text-lg font-semibold transition-all duration-300 border-b-4 shadow-xl ${
              activeTab === tab
                ? "bg-white text-blue"
                : "bg-[#EBF1FF] text-gray-800"
            } 
            ${index === 0 ? "rounded-l-sm" : ""} 
            ${index === tabs.length - 1 ? "rounded-r-sm" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}