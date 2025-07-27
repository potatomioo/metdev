"use client";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-50 top-0">
      <div className="max-w-6xl mx-auto px-6 py-2">
        <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-white">MetDev</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-sm">
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
              className="bg-violet-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Download
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}