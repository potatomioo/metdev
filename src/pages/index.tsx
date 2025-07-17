import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { tools, scope } from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4">Metaverse Development</h1>
        <p className="text-center max-w-xl text-lg">
          Explore tools, scope, and futuristic possibilities in the Metaverse world.
        </p>
      </section>

      <Section id="tools" title="Essential Tools for Metaverse Dev">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </main>
  );
}
