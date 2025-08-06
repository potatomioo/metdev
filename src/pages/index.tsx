import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { features, ease, roadmapSteps } from "@/data/content";
import RoadmapCarousel from "@/components/RoadmapCarousel";
import React from "react";


export default function Home() {
  const backgroundStyle = {
    background: `
      radial-gradient(circle at 30% 20%, rgba(206, 108, 238, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(242, 155, 255, 0.2) 0%, transparent 50%),
      linear-gradient(135deg,rgb(2, 3, 5) 0%,rgb(0, 0, 0) 50%,rgb(8, 9, 10) 100%)
    `
  };


  return (
    <main className="pt-20 min-h-screen bg-gray-950 text-white" style={backgroundStyle}>
      <Navbar />
      <section className="flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center leading-tight">
          <span className="text-violet-400">Metaverse </span>VR Starter Kit
          <br />
          <span>for Unity</span>
        </h1>
        <p className="text-center max-w-xl text-base sm:text-lg px-4">
          Kickstart Your VR Journey in Minutes — Drag, Drop, and Develop for Oculus based VR projects in Unity with ease.
        </p>
        <a
          href="/OculusBase.unitypackage"
          download
          className="mt-12 sm:mt-16 inline-block px-6 py-3 bg-white text-black text-base sm:text-lg font-bold rounded-lg shadow-lg transition-colors hover:bg-violet-200 text-center"
        >
          Download Package
        </a>
      </section>


      {/* <div className="bg-gray-900 w-full pt-8 pb-0"> */}
      <Section id="start" title="Getting Started (Quick Start)">
        <div className="flex flex-col items-center mt-6 sm:mt-10 gap-0">
          <RoadmapCarousel steps={roadmapSteps} />
        </div>
      </Section>

      <Section id="features" title="Key Features">
        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-800">
                <img
                  src={feature.image} // Make sure your feature object has an image property
                  alt={feature.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-gray-800 flex items-center justify-center';
                    fallback.innerHTML = `
                      <div class="text-center text-gray-500">
                        <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p class="text-sm">${feature.name}</p>
                      </div>
                    `;
                    target.parentElement?.appendChild(fallback);
                  }}
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* </div> */}
      <Section id="ease" title="How Easy Is It?">
        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {ease.map((ease) => (
            <div
              key={ease.name}
              className="bg-gray-900 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform hover:shadow-xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{ease.name}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{ease.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <footer className="mt-16 sm:mt-20 py-8 sm:py-10 bg-gray-900 flex flex-col items-center border-t border-gray-800 w-full px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Reach Us</h2>
        <p className="text-gray-400 mb-6 text-center max-w-md text-sm sm:text-base">
          Have questions, feedback, or need support? We are here to help! Connect with us anytime.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href="mailto:deeptanshushuklaji@email.com"
            className="flex items-center justify-center text-violet-400 hover:underline text-base sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"></path>
            </svg>
            Email
          </a>
          <a
            href="https://twitter.com/potatomiooo"
            className="flex items-center justify-center text-violet-400 hover:underline text-base sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* X (Twitter) Logo SVG */}
            <svg className="w-5 h-5 mr-2" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1199.61 21.5H974.09L600.01 529.13L225.91 21.5H0.39L484.13 637.09L0 1205.5H225.52L600.01 697.87L974.49 1205.5H1200L715.87 589.91L1199.61 21.5ZM900.41 1102.5L600.01 684.09L299.6 1102.5H146.09L600.01 529.13L1053.92 1102.5H900.41Z" />
            </svg>
            Twitter
          </a>
        </div>
      </footer>
    </main>
  );
}
