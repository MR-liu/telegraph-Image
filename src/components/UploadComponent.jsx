import React from "react";
import Image from "next/image";

const FilePreview = ({ files, onRemoveFile, onViewFile }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {files.map((file, index) => (
        <div key={index} className="relative">
          {file.type.startsWith("image/") && (
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={100}
              height={100}
              className="object-cover w-full h-full rounded-lg"
              onClick={() => onViewFile(file)}
            />
          )}
          <button
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6"
            onClick={() => onRemoveFile(index)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilePreview;
