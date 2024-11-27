import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons';

const ImageDisplayComponent = ({ file, index, onImageClick, onRemoveImage, onUpload }) => {
    return (
        <div key={index} className="relative rounded-2xl w-44 h-48 ring-offset-2 ring-2  mx-3 my-3 flex flex-col items-center">
            <div className="relative w-36 h-36 " onClick={() => onImageClick(index)}>
                {file.type.startsWith("image/") && (
                    <Image
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${file.name}`}
                        fill={true}
                    />
                )}
                {file.type.startsWith("video/") && (
                    <video
                        src={URL.createObjectURL(file)}
                        controls
                        className="w-full h-full"
                    />
                )}
                {!file.type.startsWith("image/") && !file.type.startsWith("video/") && (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
                        <p>{file.name}</p>
                    </div>
                )}
            </div>
            <div className="flex flex-row items-center  justify-center w-full mt-3">
                <button
                    className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer mx-2"
                    onClick={() => onImageClick(index)}
                >
                    <FontAwesomeIcon icon={faSearchPlus} />
                </button>
                <button
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer mx-2"
                    onClick={() => onRemoveImage(index)}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button
                    className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer mx-2"
                    onClick={() => onUpload(file)}
                >
                    <FontAwesomeIcon icon={faUpload} />
                </button>
            </div>
        </div>
    );
};

export default ImageDisplayComponent;
