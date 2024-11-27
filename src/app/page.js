"use client";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import TabContentComponent from "@/components/TabContentComponent";
import ImageModalComponent from "@/components/ImageModalComponent";
import { faImages, faTrashAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedFilesNum, setUploadedFilesNum] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [uploading, setUploading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("tgchannel");
  const [boxType, setBoxType] = useState("img");

  const parentRef = useRef(null);

  const handleFileChange = (event) => {
    const newFiles = event.target.files;
    const filteredFiles = Array.from(newFiles).filter(
      (file) => !selectedFiles.find((selFile) => selFile.name === file.name)
    );
    const uniqueFiles = filteredFiles.filter(
      (file) => !uploadedImages.find((upImg) => upImg.name === file.name)
    );
    setSelectedFiles([...selectedFiles, ...uniqueFiles]);
  };

  const handleClear = () => {
    setSelectedFiles([]);
    setUploadedImages([]);
  };

  const getTotalSizeInMB = (files) => {
    const totalSizeInBytes = files.reduce((acc, file) => acc + file.size, 0);
    return (totalSizeInBytes / (1024 * 1024)).toFixed(2); // Convert to MB and keep two decimals
  };

  const handleUpload = async (file = null) => {
    setUploading(true);
    const filesToUpload = file ? [file] : selectedFiles;
    if (filesToUpload.length === 0) {
      toast.error("请选择要上传的文件");
      setUploading(false);
      return;
    }

    const formFieldName = selectedOption === "tencent" ? "media" : "file";
    let successCount = 0;

    for (const file of filesToUpload) {
      const formData = new FormData();
      formData.append(formFieldName, file);
      const targetUrl = `/api/${selectedOption}`;

      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          const result = await response.json();
          file.url = result.url;
          setUploadedImages((prevImages) => [...prevImages, file]);
          setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
          successCount++;
        } else {
          const errorData = await response.json();
          const errorMsg = errorData.message || `Error uploading ${file.name}`;
          toast.error(errorMsg);
        }
      } catch (error) {
        toast.error(`Error uploading ${file.name}`);
      }
    }

    setUploadedFilesNum(uploadedFilesNum + successCount);
    toast.success(`Successfully uploaded ${successCount} images`);
    setUploading(false);
  };

  const handleImageClick = (index) => {
    const file = selectedFiles[index];
    const fileType = file.type.split('/')[0];
    setBoxType(fileType === "image" ? "img" : fileType === "video" ? "video" : "other");
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = selectedFiles.filter((_, idx) => idx !== index);
    setSelectedFiles(updatedFiles);
  };

  const handlePaste = (event) => {
    const clipboardItems = event.clipboardData.items;
    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.kind === "file" && item.type.includes("image")) {
        const file = item.getAsFile();
        setSelectedFiles([...selectedFiles, file]);
        break; // Only process the first file
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const filteredFiles = Array.from(files).filter(
        (file) => !selectedFiles.find((selFile) => selFile.name === file.name)
      );
      setSelectedFiles([...selectedFiles, ...filteredFiles]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const calculateMinHeight = () => {
    const rows = Math.ceil(selectedFiles.length / 4);
    return `${rows * 100}px`;
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("链接复制成功");
    } catch (err) {
      toast.error("链接复制失败");
    }
  };

  const handleCopyCode = async () => {
    const codeElements = parentRef.current.querySelectorAll("code");
    const values = Array.from(codeElements).map((code) => code.textContent);
    try {
      await navigator.clipboard.writeText(values.join("\n"));
      toast.success("链接复制成功");
    } catch (error) {
      toast.error(`链接复制失败: ${error}`);
    }
  };

  return (
    <main className="overflow-auto h-full flex w-full flex-col items-center justify-between pt-20 pb-20">
      <div className="mt-[60px] w-9/10 sm:w-9/10 md:w-9/10 lg:w-9/10 xl:w-3/5 2xl:w-2/3">
        <div className="border-2 border-dashed border-slate-400 rounded-md relative" onDrop={handleDrop} onDragOver={handleDragOver} onPaste={handlePaste} style={{ minHeight: calculateMinHeight() }}>
          <LoadingOverlay loading={uploading} />
          {selectedFiles.map((file, index) => (
            <ImageDisplayComponent
              key={index}
              file={file}
              index={index}
              onImageClick={handleImageClick}
              onRemoveImage={() => handleRemoveImage(index)}
              onUpload={() => handleUpload(file)}
            />
          ))}
        </div>
        <div className="w-full rounded-md shadow-sm overflow-hidden mt-4 grid grid-cols-8">
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
          <label htmlFor="file-upload" className="md:col-span-1 col-span-8 w-full h-10 bg-blue-500 cursor-pointer flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faImages} style={{ width: "20px", height: "20px" }} className="mr-2" />
            选择图片
          </label>
          <div className="md:col-span-5 col-span-8 w-full h-10 bg-slate-200 leading-10 px-4 text-center md:text-left">
            已选择 {selectedFiles.length} 张，共 {getTotalSizeInMB(selectedFiles)} M
          </div>
          <div className="md:col-span-1 col-span-3 w-full bg-red-500 cursor-pointer h-10 flex items-center justify-center text-white" onClick={handleClear}>
            <FontAwesomeIcon icon={faTrashAlt} style={{ width: "20px", height: "20px" }}/>
            清除
          </div>
          <div className={`md:col-span-1 col-span-5 w-full bg-green-500 cursor-pointer h-10 flex items-center justify-center text-white ${uploading ? "pointer-events-none opacity-50" : ""}`} onClick={handleUpload}>
            <FontAwesomeIcon icon={faUpload} style={{ width: "20px", height: "20px" }} className="mr-2" />
            上传
          </div>
        </div>
        <div className="w-full mt-4 min-h-[200px] mb-[60px] ">
          {uploadedImages.length > 0 && (
            <TabContentComponent
              activeTab={activeTab}
              uploadedImages={uploadedImages}
              handleCopy={handleCopy}
              handleCopyCode={handleCopyCode}
              parentRef={parentRef}
            />
          )}
        </div>
      </div>
      {selectedImage && (
        <ImageModalComponent
          selectedImage={selectedImage}
          boxType={boxType}
          handleCloseImage={handleCloseImage}
        />
      )}
    </main>
  );
}
