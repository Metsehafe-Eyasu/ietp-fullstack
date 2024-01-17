"use client";
import { useState } from "react";
import { db } from "@/lib/db/firebase";
import { ref, onValue } from "firebase/database";
import Card from "@/components/Card";

interface FirebaseData {
  [key: string]: {
    name: string;
    timestamp: number;
  };
}

interface Item {
  id: string;
  name: string;
  timestamp: number;
}

export default function Home() {
  const [data, setData] = useState<Item[]>([]);

  const getData = async () => {
    const dbRef = ref(db, "steps");
    onValue(dbRef, (snapshot) => {
      const data: FirebaseData = snapshot.val();
      const itemList: Item[] = Object.entries(data).map(([id, itemData]) => ({
        id,
        ...itemData,
      }));
      itemList.sort((a, b) => b.timestamp - a.timestamp);
      setData(itemList);
    });
  };

  setTimeout(() => {
    getData();
  }, 2000);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">Steps</h1>
      <div className="flex flex-col w-full max-w-2xl">
        {data.map((item: Item) => (
          <Card
            key={item.id}
            name={item.name}
            timestamp={item.timestamp}
          />
        ))}
      </div>
    </main>
  );
}
