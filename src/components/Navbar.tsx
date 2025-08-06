"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed z-50 top-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
        <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-lg">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h2 className="text-lg sm:text-xl font-semibold text-white">MetDev</h2>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <li>
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#start" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Getting Started
              </a>
            </li>
            <li>
              <a 
                href="#ease" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                How Easy
              </a>
            </li>
            <li>
              <a 
                href="/OculusBase.unitypackage"
                download
                className="bg-violet-600 hover:bg-violet-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Download
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-700">
            <ul className="py-4 px-4 space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#start" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a 
                  href="#ease" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How Easy
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="/OculusBase.unitypackage"
                  download
                  className="block bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}