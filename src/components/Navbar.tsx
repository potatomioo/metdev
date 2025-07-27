"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav
      className={`w-full fixed z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-gray-600/50 shadow-md top-5 rounded-2xl"
          : "bg-transparent top-0"
      }`}
    >
      <h2 className="text-xl font-semibold">MetDev</h2>
      <ul className="flex gap-6 text-sm sm:text-base">
        <li>
          <a href="#features" className="hover:text-violet-400">
            Features
          </a>
        </li>
        <li>
          <a href="#start" className="hover:text-violet-400 hover:border-violet-500 border border-white rounded-full px-4 py-2 ml-2 transition-colors">
            Getting Started
          </a>
        </li>
      </ul>
    </nav>
  );
}
