"use client";

export default function Navbar() {
    return (
      <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
        <h2 className="text-xl font-semibold">Metaverse Blog</h2>
        <ul className="flex gap-6">
          <li><a href="#tools" className="hover:text-blue-400">Tools</a></li>
          <li><a href="#scope" className="hover:text-blue-400">Scope</a></li>
          <li><a href="#future" className="hover:text-blue-400">Future</a></li>
        </ul>
      </nav>
    );
  }