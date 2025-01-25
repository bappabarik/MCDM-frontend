import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RankingChart = ({ rankings }) => {
  const data = {
    labels: rankings.map((item) => item.name),
    datasets: [
      {
        label: "Ranking Score",
        data: rankings.map((item) => item.score),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "TOPSIS Rankings",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default RankingChart;
