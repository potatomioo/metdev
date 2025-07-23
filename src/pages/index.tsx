import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { features, scope, ease} from "@/data/content";

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
          className="mt-8 inline-block px-8 py-4 bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-lg transition-colors 
          hover:bg-white hover:text-blue-500 hover:scale-105"
        >
          Download Package
        </a>
      </section>

      <Section id="features" title="Key Features">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-10">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-gray-800 p-4 rounded-lg hover:scale-105 hover:border-2 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="start" title="How Easy Is It?">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
          {ease.map((ease) => (
            <div
              key={ease.name}
              className="bg-blue-500 p-4 rounded-lg hover:scale-105 hover:border-2 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{ease.name}</h3>
              <p className="text-gray-300">{ease.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="scope" title="Getting Started (Quick Start)">
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {scope.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
