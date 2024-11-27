import React from "react";

const TabContent = ({ activeTab, files }) => {
  return (
    <div className="mt-4">
      {activeTab === "preview" &&
        files.map((file, index) => (
          <div key={index} className="mb-4">
            <p>{file.url}</p>
          </div>
        ))}
      {/* Add other tab cases here */}
    </div>
  );
};

export default TabContent;
