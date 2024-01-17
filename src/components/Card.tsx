import { formatTimestamp } from "@/app/utils";

interface CardProps {
  name: string;
  timestamp: number;
}

const Card = ({name, timestamp} : CardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 w-72 mx-auto my-4 mb-4">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-500">{formatTimestamp(timestamp)}</p>
    </div>
  );
};

export default Card;
