"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 获取当前路径
  const pathname = usePathname();
  const currentConfig = {
    bgClass: "bg-gradient-to-r from-pink-500 to-orange-500",
    btnClass: "bg-gradient-to-r from-pink-500 to-orange-500",
    title: "OrangeThink Image Hosting",
    subtitle: "Secure and Fast Hosting for All Your Images",
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={`bg-gradient-to-r transition-colors duration-700 ease-in-out ${currentConfig.bgClass} text-white shadow-md fixed top-0 left-0 right-0 z-50`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="https://orangethink.com.hk/" target="_blank" rel="noopener noreferrer">
            <img src="/img/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <h1 className="ml-3 text-xl md:text-2xl font-bold">
            <Link href="/">SHOPS LINKER</Link>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="https://www.shopslinker.com/" className="hover:text-blue-200 transition">
            Shop Navigator
          </a>
          <a
            href="https://novels-cats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition"
          >
            Novel-Cats
          </a>
          <Link href="/about" className="hover:text-blue-200 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 1024 1024"
              version="1.1"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M139.56096 215.488512c29.927424 0 53.557248 24.406016 53.557248 53.54496 0 29.927424-23.631872 53.559296-53.557248 53.559296C110.422016 322.592768 86.016 298.960896 86.016 269.033472 86.016 239.894528 110.422016 215.488512 139.56096 215.488512zM301.010944 317.44c-22.833152 0-41.728-19.13856-41.728-41.984s18.896896-41.984 41.728-41.984l604.837888 0c22.84544 0 41.744384 19.13856 41.744384 41.984s-18.898944 41.984-41.744384 41.984L301.010944 317.44z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-gradient-to-r ${currentConfig.bgClass} text-white px-4 py-6 space-y-4`}
        >
          <Link href="/" className="block hover:text-blue-200 transition">
            Shop Navigator
          </Link>
          <Link href="/navigation" className="block hover:text-blue-200 transition">
            Site Directory
          </Link>
          <Link href="/about" className="block hover:text-blue-200 transition">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-200 transition">
            Contact Us
          </Link>
          <a
            href="https://novels-cats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-200 transition"
          >
            Novel-Cats
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
