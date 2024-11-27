import React from "react";
import LoadingOverlay from "@/components/LoadingOverlay";

const UploadArea = ({ onFileChange, uploading, selectedFiles }) => {
  return (
    <div
      className="border-2 border-dashed border-gray-400 rounded-lg p-6 relative"
      onDrop={(e) => {
        e.preventDefault();
        onFileChange(e.dataTransfer.files);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <LoadingOverlay loading={uploading} />
      {selectedFiles.length === 0 && (
        <p className="text-center text-gray-500">Drag and drop files here</p>
      )}
      <input
        type="file"
        className="hidden"
        multiple
        onChange={(e) => onFileChange(e.target.files)}
      />
    </div>
  );
};

export default UploadArea;
