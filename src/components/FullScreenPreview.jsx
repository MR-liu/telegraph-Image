import React from "react";

const FullScreenPreview = ({ file, type, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      {type === "img" ? (
        <img src={file} alt="Preview" className="max-w-full max-h-full rounded-lg" />
      ) : (
        <video src={file} controls className="max-w-full max-h-full rounded-lg" />
      )}
    </div>
  );
};

export default FullScreenPreview;
