import React from 'react';

const ImageModalComponent = ({ selectedImage, boxType, handleCloseImage }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseImage}>
            <div className="relative flex flex-col items-center justify-between">
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={handleCloseImage}
                >
                    &times;
                </button>
                {boxType === "img" ? (
                    <img src={selectedImage} alt="Selected" className="object-cover w-9/10 h-auto rounded-lg" />
                ) : boxType === "video" ? (
                    <video src={selectedImage} className="object-cover w-9/10 h-auto rounded-lg" controls />
                ) : (
                    <div>Unsupported or unknown file type</div>
                )}
            </div>
        </div>
    );
};

export default ImageModalComponent;
