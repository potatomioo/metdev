interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Section({ id, title, children }: SectionProps) {
    return (
      <section id={id} className="py-8 sm:py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        {children}
      </section>
    );
  }