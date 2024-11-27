"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import LoadingOverlay from "@/components/LoadingOverlay";
import UploadArea from "@/components/UploadArea";
import FilePreview from "@/components/FilePreview";
import TabNavigation from "@/components/TabNavigation";
import TabContent from "@/components/TabContent";
import FullScreenPreview from "@/components/FullScreenPreview";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [activeTab, setActiveTab] = useState("preview");
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [boxType, setBoxType] = useState("img");
  const [IP, setIP] = useState("");
  const [Total, setTotal] = useState("?");

  useEffect(() => {
    fetchIPandTotal();
  }, []);

  const fetchIPandTotal = async () => {
    try {
      const [ipRes, totalRes] = await Promise.all([
        fetch("/api/ip"),
        fetch("/api/total"),
      ]);
      const ipData = await ipRes.json();
      const totalData = await totalRes.json();
      setIP(ipData.ip);
      setTotal(totalData.total);
    } catch (error) {
      console.error("Failed to fetch IP and Total:", error);
    }
  };

  const handleFileChange = (files) => {
    const newFiles = Array.from(files).filter(
      (file) => !selectedFiles.some((f) => f.name === file.name)
    );
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleUpload = async () => {
    if (!selectedFiles.length) {
      toast.error("No files selected!");
      return;
    }

    setUploading(true);
    try {
      let successCount = 0;
      for (const file of selectedFiles) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", { method: "POST", body: formData });

        if (!response.ok) throw new Error(`Failed to upload ${file.name}`);
        const data = await response.json();
        setUploadedImages((prev) => [...prev, { ...file, url: data.url }]);
        successCount++;
      }
      toast.success(`${successCount} files uploaded successfully!`);
      setSelectedFiles([]);
    } catch (error) {
      toast.error("Error uploading files.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className=" bg-gray-100 flex flex-col items-center pt-20 pb-20">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">File Uploader</h1>
          <p className="text-gray-500">
            Upload files up to 5MB. Hosted images: <span className="text-blue-500">{Total}</span>.
            Your IP: <span className="text-blue-500">{IP}</span>.
          </p>
        </div>

        <UploadArea
          onFileChange={handleFileChange}
          uploading={uploading}
          selectedFiles={selectedFiles}
        />

        <FilePreview
          files={selectedFiles}
          onRemoveFile={(index) =>
            setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
          }
          onViewFile={(file) => {
            setBoxType(file.type.startsWith("image/") ? "img" : "video");
            setSelectedImage(URL.createObjectURL(file));
          }}
        />

        <div className="mt-6 flex justify-between">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={() => setSelectedFiles([])}
          >
            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
            Clear All
          </button>
          <button
            className={`px-4 py-2 text-white rounded-lg shadow-md ${
              uploading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={handleUpload}
            disabled={uploading}
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>

        {uploadedImages.length > 0 && (
          <>
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent activeTab={activeTab} files={uploadedImages} />
          </>
        )}
      </div>

      {selectedImage && (
        <FullScreenPreview
          file={selectedImage}
          type={boxType}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <ToastContainer />
    </main>
  );
}
