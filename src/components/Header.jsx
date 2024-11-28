"use client"
import React, { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  // Updated configuration for an image hosting site
  const currentConfig = {
    bgClass: "bg-gradient-to-r from-pink-500 to-orange-500",
    btnClass: "bg-gradient-to-r from-pink-500 to-orange-500",
    title: "OrangeThink Image Hosting",
    subtitle: "Secure and Fast Hosting for All Your Images",
  };

  // Handle search form submission for images on your platform
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // 使用 encodeURIComponent 确保查询字符串是安全的
      const googleImageUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`;
      window.open(googleImageUrl, "_blank"); // 在新标签页中打开URL
    }
  };
  

  return (
    <header className={`text-center text-white shadow-md pt-20 pb-20 transition-colors duration-700 ease-in-out ${currentConfig.bgClass}`}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          {currentConfig.title}
        </h1>
        <p className="text-lg md:text-xl font-light">{currentConfig.subtitle}</p>
      </div>

      {/* Enhanced Search Bar specifically for images */}
      <div className="flex justify-center px-4">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-full overflow-hidden w-full max-w-lg"
        >
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 text-gray-700 text-base sm:text-lg focus:outline-none focus:ring-2 focus:border-transparent"
          />
          <button
            type="submit"
            className={`w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 ${currentConfig.btnClass} text-white font-semibold rounded-full hover:shadow-xl transition-all`}
            style={{ marginRight: 2 }}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
