"use client";

import { Line } from "react-chartjs-2";
import { type Item } from "@/lib/interfaces";
import { formatTimeForChart } from "@/app/utils";

type Props = {
  data: Item[];
};

const Chart: React.FC<Props> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart",
      },
    },
  };

  const labels = data.map((item) => formatTimeForChart(item.timestamp));

  const test = {
    labels,
    datasets: [
      {
        label: "Step count",
        data: data.map((item) => item.name),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ],
  };

  return <Line options={options} data={test} className="w-full"/>;
};

export default Chart;
