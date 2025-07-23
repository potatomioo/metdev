interface RoadmapCardProps {
  step: number;
  title: string;
  desc: string;
}

let RoadmapCard: React.FC<RoadmapCardProps> = ({ step, title, desc }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center min-w-[220px]">
    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mb-2">
      {step}
    </div>
    <h4 className="text-lg font-semibold mb-1 text-center">{title}</h4>
    <p className="text-gray-300 text-center text-sm">{desc}</p>
  </div>
);

export default RoadmapCard;