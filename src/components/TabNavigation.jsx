import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["preview", "htmlLinks", "markdownLinks", "bbcodeLinks", "viewLinks"];
  return (
    <div className="flex gap-4 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md ${
            activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
