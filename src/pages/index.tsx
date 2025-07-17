import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
      <Navbar />
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4">Metaverse Development</h1>
        <p className="text-center max-w-xl text-lg">
          Explore tools, scope, and futuristic possibilities in the Metaverse world.
        </p>
      </section>
    </main>
  );
}