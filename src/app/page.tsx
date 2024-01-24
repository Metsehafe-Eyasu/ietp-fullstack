"use client";
import { useState, useMemo } from "react";
import { db } from "@/lib/db/firebase";
import { ref, onValue } from "firebase/database";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import { type FirebaseData, type Item } from "@/lib/interfaces";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [data, setData] = useState<Item[]>([]);
  const onDisplay = useMemo(() => data.slice(-5).reverse(), [data]);
  const memoizedData = useMemo(() => data.slice(-20), [data]);

  const getData = async () => {
    const dbRef = ref(db, "steps");
    onValue(dbRef, (snapshot) => {
      const data: FirebaseData = snapshot.val();
      const itemList: Item[] = Object.entries(data).map(([id, itemData]) => ({
        id,
        ...itemData,
      }));
      itemList.sort((a, b) => a.timestamp - b.timestamp);
      setData(itemList);
    });
  };

  setTimeout(() => {
    getData();
  }, 2000);

  return (
    <main className="flex flex-col gap-2 items-center justify-between p-12 h-full w-full">
      <h1 className="text-4xl font-bold pb-4 w-full text-center border-b-2 border-slate-300">
        Realtime Dashboard
      </h1>
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-2">
          {onDisplay.map((item: Item) => (
            <Card key={item.id} name={item.name} timestamp={item.timestamp} />
          ))}
        </div>
        <div className="w-3/4">
          <Chart data={memoizedData} />
        </div>
      </div>
    </main>
  );
}
