"use client";
import { useState } from "react";
import { db } from "@/lib/db/firebase";
import { ref, onValue } from "firebase/database";

export default function Home() {
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    const dbRef = ref(db, "steps");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setData(Object.entries(data));
      console.log(Object.entries(data));
    });
  };

  const formatTimestamp = (timestamp: Date) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  setTimeout(() => {
    getData();
  }, 2000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Steps</h1>
      {data.map((item: any) => {
        return (
          <div
            key={item[0]}
            className="flex flex-col items-center justify-center w-full h-96 bg-gray-200 rounded-lg shadow-lg"
          >
            <h1 className="text-2xl font-bold">{item[1].name}</h1>
            <p className="text-gray-500">{formatTimestamp(item[1].timestamp)}</p>
          </div>
        );
      })}
    </main>
  );
}
