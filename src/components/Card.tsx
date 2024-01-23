import { formatTimestamp } from "@/app/utils";

interface CardProps {
  name: string;
  timestamp: number;
}

const Card = ({name, timestamp} : CardProps) => {
  return (
    <div className="bg-slate-200 rounded-lg overflow-hidden shadow-md p-4 w-72">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-500 text-sm">{formatTimestamp(timestamp)}</p>
    </div>
  );
};

export default Card;
