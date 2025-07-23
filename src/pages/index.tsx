import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { features, scope, ease, roadmapSteps } from "@/data/content";
import RoadmapCard from "@/components/RoadmapCard";
import React from "react";


export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-7xl font-bold mb-4">
          <span className="text-blue-400">Metaverse </span>VR Starter Kit
        </h1>
        <p className="text-center max-w-xl text-lg">
          Kickstart Your VR Journey in Minutes — Drag, Drop, and Develop for Oculus based VR projects with ease.
        </p>
        <a
          href="/OculusBase.unitypackage"
          download
          className="mt-16 inline-block px-8 py-4 bg-transparent border-2 text-white text-2xl font-bold rounded-lg shadow-lg transition-colors 
          hover:scale-105 hover:bg-blue-900"
        >
          Download Package
        </a>
      </section>

      <Section id="features" title="Key Features">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-gray-900 p-4 rounded-lg hover:scale-101 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <div className="bg-gray-900 w-full pt-8 pb-0">
        <Section id="scope" title="Getting Started (Quick Start)">
          <div className="flex flex-col items-center mt-10 gap-0">
            {roadmapSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <RoadmapCard step={idx + 1} title={step.title} desc={step.desc} />
                {idx < roadmapSteps.length - 1 && (
                  <svg className="w-8 h-8 text-blue-400 my-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </Section>
      </div>
      <Section id="start" title="How Easy Is It?">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 ">
          {ease.map((ease) => (
            <div
              key={ease.name}
              className="bg-gray-900 p-6 rounded-lg hover:scale-104 transition-transform hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{ease.name}</h3>
              <p className="text-gray-300">{ease.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <footer className="mt-20 py-10 bg-gray-900 flex flex-col items-center border-t border-gray-800 w-full">
        <h2 className="text-2xl font-bold mb-2">Reach Us</h2>
        <p className="text-gray-400 mb-6 text-center max-w-md">
          Have questions, feedback, or need support? We're here to help! Connect with us anytime.
        </p>
        <div className="flex space-x-8">
          <a
            href="mailto:deeptanshushuklaji@email.com"
            className="flex items-center text-blue-400 hover:underline text-lg"
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
            className="flex items-center text-blue-400 hover:underline text-lg"
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
