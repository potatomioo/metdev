interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Section({ id, title, children }: SectionProps) {
    return (
      <section id={id} className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">{title}</h2>
        {children}
      </section>
    );
  }