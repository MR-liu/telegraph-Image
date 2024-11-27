"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import {
  faImages,
  faTrashAlt,
  faUpload,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedFilesNum, setUploadedFilesNum] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // 添加状态用于跟踪选中的放大图片
  const [activeTab, setActiveTab] = useState("preview");
  const [uploading, setUploading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("tgchannel"); // 初始选择第一个选项
  const [boxType, setBoxtype] = useState("img");

  const parentRef = useRef(null);

  let headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  };

  const handleFileChange = (event) => {
    const newFiles = event.target.files;
    const filteredFiles = Array.from(newFiles).filter(
      (file) => !selectedFiles.find((selFile) => selFile.name === file.name)
    );
    // 过滤掉已经在 uploadedImages 数组中存在的文件
    const uniqueFiles = filteredFiles.filter(
      (file) => !uploadedImages.find((upImg) => upImg.name === file.name)
    );

    setSelectedFiles([...selectedFiles, ...uniqueFiles]);
  };

  const handleClear = () => {
    setSelectedFiles([]);
    setUploadStatus("");
  };

  const getTotalSizeInMB = (files) => {
    const totalSizeInBytes = Array.from(files).reduce(
      (acc, file) => acc + file.size,
      0
    );
    return (totalSizeInBytes / (1024 * 1024)).toFixed(2); // 转换为MB并保留两位小数
  };

  const handleUpload = async (file = null) => {
    setUploading(true);

    const filesToUpload = file ? [file] : selectedFiles;

    if (filesToUpload.length === 0) {
      toast.error("Please select the file to upload");
      setUploading(false);
      return;
    }

    const formFieldName = selectedOption === "tencent" ? "media" : "file";
    let successCount = 0;

    try {
      for (const file of filesToUpload) {
        const formData = new FormData();

        formData.append(formFieldName, file);

        try {
          const targetUrl =
            selectedOption === "tgchannel" || selectedOption === "r2"
              ? `/api/enableauthapi/${selectedOption}`
              : `/api/${selectedOption}`;

          // const response = await fetch("https://img.131213.xyz/api/tencent", {
          const response = await fetch(targetUrl, {
            method: "POST",
            body: formData,
            headers: headers,
          });

          if (response.ok) {
            const result = await response.json();
            // console.log(result);

            file.url = result.url;

            // 更新 uploadedImages 和 selectedFiles
            setUploadedImages((prevImages) => [...prevImages, file]);
            setSelectedFiles((prevFiles) =>
              prevFiles.filter((f) => f !== file)
            );
            successCount++;
          } else {
            // 尝试从响应中提取错误信息
            let errorMsg;
            try {
              const errorData = await response.json();
              errorMsg =
                errorData.message || `Error uploading ${file.name} image`;
            } catch (jsonError) {
              // 如果解析 JSON 失败，使用默认错误信息
              errorMsg = `Unknown error occurred while uploading ${file.name} image`;
            }

            // 细化状态码处理
            switch (response.status) {
              case 400:
                toast.error(`Request is invalid: ${errorMsg}`);
                break;
              case 403:
                toast.error(`Unauthorized access to resources: ${errorMsg}`);
                break;
              case 404:
                toast.error(`Resource not found: ${errorMsg}`);
                break;
              case 500:
                toast.error(`Server error: ${errorMsg}`);
                break;
              case 401:
                toast.error(`unauthorized: ${errorMsg}`);
                break;
              default:
                toast.error(`Error uploading ${file.name} image: ${errorMsg}`);
            }
          }
        } catch (error) {
          toast.error(`Error uploading ${file.name} image`);
        }
      }

      setUploadedFilesNum(uploadedFilesNum + successCount);
      toast.success(`Successfully uploaded ${successCount} images`);
    } catch (error) {
      console.error("An error occurred during the upload process:", error);
      toast.error("upload error");
    } finally {
      setUploading(false);
    }
  };

  const handlePaste = (event) => {
    const clipboardItems = event.clipboardData.items;

    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.kind === "file" && item.type.includes("image")) {
        const file = item.getAsFile();
        setSelectedFiles([...selectedFiles, file]);
        break;
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

  // 根据图片数量动态计算容器高度
  const calculateMinHeight = () => {
    const rows = Math.ceil(selectedFiles.length / 4);
    return `${rows * 100}px`;
  };

  // 处理点击图片放大
  const handleImageClick = (index) => {
    if (selectedFiles[index].type.startsWith("image/")) {
      setBoxtype("img");
    } else if (selectedFiles[index].type.startsWith("video/")) {
      setBoxtype("video");
    } else {
      setBoxtype("other");
    }

    setSelectedImage(URL.createObjectURL(selectedFiles[index]));
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = selectedFiles.filter((_, idx) => idx !== index);
    setSelectedFiles(updatedFiles);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Link copied successfully`);
    } catch (err) {
      toast.error("Link copying failed");
    }
  };

  const handleCopyCode = async () => {
    const codeElements = parentRef.current.querySelectorAll("code");
    const values = Array.from(codeElements).map((code) => code.textContent);
    try {
      await navigator.clipboard.writeText(values.join("\n"));
      toast.success(`Link copied successfully`);
    } catch (error) {
      toast.error(`Link copying failed\n${error}`);
    }
  };

  const handlerenderImageClick = (imageUrl, type) => {
    setBoxtype(type);
    setSelectedImage(imageUrl);
  };

  const renderFile = (data, index) => {
    const fileUrl = data.url;
    if (data.type.startsWith("image/")) {
      return (
        <img
          key={`image-${index}`}
          src={data.url}
          alt={`Uploaded ${index}`}
          className="object-cover w-36 h-40 m-2"
          onClick={() => handlerenderImageClick(fileUrl, "img")}
        />
      );
    } else if (data.type.startsWith("video/")) {
      return (
        <video
          key={`video-${index}`}
          src={data.url}
          className="object-cover w-36 h-40 m-2"
          controls
          onClick={() => handlerenderImageClick(fileUrl, "video")}
        >
          Your browser does not support the video tag.
        </video>
      );
    } else {
      // 其他文件类型
      return (
        <img
          key={`image-${index}`}
          src={data.url}
          alt={`Uploaded ${index}`}
          className="object-cover w-36 h-40 m-2"
          onClick={() => handlerenderImageClick(fileUrl, "other")}
        />
      );
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "preview":
        return (
          <div className=" flex flex-col ">
            {uploadedImages.map((data, index) => (
              <div
                key={index}
                className="m-2 rounded-2xl ring-offset-2 ring-2  ring-slate-100 flex flex-row "
              >
                {renderFile(data, index)}
                <div className="flex flex-col justify-center w-4/5">
                  {[
                    { text: data.url, onClick: () => handleCopy(data.url) },
                    {
                      text: `![${data.name}](${data.url})`,
                      onClick: () => handleCopy(`![${data.name}](${data.url})`),
                    },
                    {
                      text: `<a href="${data.url}" target="_blank"><img src="${data.url}"></a>`,
                      onClick: () =>
                        handleCopy(
                          `<a href="${data.url}" target="_blank"><img src="${data.url}"></a>`
                        ),
                    },
                    {
                      text: `[img]${data.url}[/img]`,
                      onClick: () => handleCopy(`[img]${data.url}[/img]`),
                    },
                  ].map((item, i) => (
                    <input
                      key={`input-${i}`}
                      readOnly
                      value={item.text}
                      onClick={item.onClick}
                      className="px-3 my-1 py-2 border border-gray-300 rounded-lg bg-white text-sm text-gray-800 focus:outline-none placeholder-gray-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "htmlLinks":
        return (
          <div
            ref={parentRef}
            className=" p-4 bg-slate-100  "
            onClick={handleCopyCode}
          >
            {uploadedImages.map((data, index) => (
              <div key={index} className="mb-2 ">
                <code className=" w-2 break-all">{`<img src="${data.url}" alt="${data.name}" />`}</code>
              </div>
            ))}
          </div>
        );
      case "markdownLinks":
        return (
          <div
            ref={parentRef}
            className=" p-4 bg-slate-100  "
            onClick={handleCopyCode}
          >
            {uploadedImages.map((data, index) => (
              <div key={index} className="mb-2">
                <code className=" w-2 break-all">{`![${data.name}](${data.url})`}</code>
              </div>
            ))}
          </div>
        );
      case "bbcodeLinks":
        return (
          <div
            ref={parentRef}
            className=" p-4 bg-slate-100  "
            onClick={handleCopyCode}
          >
            {uploadedImages.map((data, index) => (
              <div key={index} className="mb-2">
                <code className=" w-2 break-all">{`[img]${data.url}[/img]`}</code>
              </div>
            ))}
          </div>
        );
      case "viewLinks":
        return (
          <div
            ref={parentRef}
            className=" p-4 bg-slate-100  "
            onClick={handleCopyCode}
          >
            {uploadedImages.map((data, index) => (
              <div key={index} className="mb-2">
                <code className=" w-2 break-all">{`${data.url}`}</code>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="overflow-auto h-full w-full flex flex-col items-center justify-between pt-20 pb-20">
      <div className="mt-12 w-11/12 md:w-4/5 xl:w-3/4">
        <div
          className="border border-solid border-gray-300 shadow-sm rounded-lg relative h-72"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onPaste={handlePaste}
          onClick={() => document.getElementById('file-upload').click()}
          style={{ minHeight: calculateMinHeight() }}
        >
          <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <LoadingOverlay loading={uploading} />
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="relative rounded-lg ring-offset-2 ring-1 ring-gray-300 overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1 h-60">
                  {file.type.startsWith("image/") && (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${file.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                  {file.type.startsWith("video/") && (
                    <video
                      src={URL.createObjectURL(file)}
                      controls
                      className="w-full h-full"
                    />
                  )}
                  {!file.type.startsWith("image/") &&
                    !file.type.startsWith("video/") && (
                      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                        <p>{file.name}</p>
                      </div>
                    )}
                </div>
                <div className="flex items-center justify-around p-2 bg-white">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleImageClick(index)}
                  >
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => handleUpload(file)}
                  >
                    <FontAwesomeIcon icon={faUpload} />
                  </button>
                </div>
              </div>
            ))}

            {selectedFiles.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400">
                  Drag and drop files here or paste screenshots here to upload
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-8 gap-4">
        <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
        multiple
      />
          <div className="md:col-span-6 col-span-2">
            <div className="h-12 bg-gray-100 leading-loose px-4 text-center md:text-left shadow justify-center items-center flex">
              Selected {selectedFiles.length}，Total{" "}
              {getTotalSizeInMB(selectedFiles)} MB
            </div>
          </div>
          <div className="md:col-span-1 col-span-1">
            <div
              className="h-12 bg-red-600 cursor-pointer flex justify-center items-center text-white rounded-lg shadow"
              onClick={handleClear}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
              Clear
            </div>
          </div>
          <div className="md:col-span-1 col-span-1">
            <div
              className={`h-12 bg-green-600 cursor-pointer flex justify-center items-center text-white rounded-lg shadow ${
                uploading ? "pointer-events-none opacity-50" : ""
              }`}
              onClick={() => handleUpload()}
            >
              <FontAwesomeIcon icon={faUpload} />
              Upload
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          {uploadedImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4 border-b border-gray-300">
              {[
                "preview",
                "htmlLinks",
                "markdownLinks",
                "bbcodeLinks",
                "viewLinks",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          )}
          {renderTabContent()}
        </div>
      </div>
      {selectedImage && (
        <button
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseImage}
        >
          <div className="relative flex flex-col items-center justify-between">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleCloseImage}
            >
              &times;
            </button>

            {boxType === "img" ? (
              <img
                src={selectedImage}
                alt="Selected"
                width={500}
                height={500}
                className="object-cover w-9/10 h-auto rounded-lg"
              />
            ) : boxType === "video" ? (
              <video
                src={selectedImage}
                width={500}
                height={500}
                className="object-cover w-9/10 h-auto rounded-lg"
                controls
              />
            ) : boxType === "other" ? (
              <div className="p-4 bg-white text-black rounded">
                <p>Unsupported file type</p>
              </div>
            ) : (
              <div>Unknown type</div>
            )}
          </div>
        </button>
      )}
    </main>
  );
}
