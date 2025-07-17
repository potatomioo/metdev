import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { tools, scope } from "@/data/content";

export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-7xl font-bold mb-4">
          <span className="text-blue-400">Metaverse</span> Development
        </h1>
        <p className="text-center max-w-xl text-lg">
          Explore tools, scope, and futuristic possibilities in the Metaverse world.
        </p>
      </section>

      <Section id="tools" title="Essential Tools for Metaverse Dev">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-10">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-300">{tool.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="start" title="Getting Started with Metaverse Dev">
        <p className="text-gray-300 mb-4">
          To kickstart your Metaverse journey, start with a base project setup:
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Unity + Oculus Quest Base Project</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Unity LTS version installed</li>
            <li>Oculus Integration package from Asset Store</li>
            <li>XR Plugin Management → Meta XR plugin</li>
            <li>Set up Android Build settings for Quest 2</li>
            <li>Ensure developer mode is enabled on your headset</li>
          </ul>
        </div>
      </Section>
      <Section id="scope" title="Scope of Metaverse">
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {scope.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
